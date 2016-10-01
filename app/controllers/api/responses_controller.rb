class Api::ResponsesController < ApplicationController

  def create
    message_body = params["Body"].downcase
    @incoming_number = params["From"]
    group = Group.find(1)
    event = group.events.where("date > ?", Date.today).sort_by{|a| a.date}.first
    user_rsvps = event.rsvps.map {|rsvp| rsvp.user_id }
    date = event.date.strftime("%A, %b %e")
    time = event.date.strftime("%l:%M %p")
    boot_twilio
    if User.where(phone: @incoming_number[2..-1]).length == 0
      send_sms("Sorry this number is not registered to an account.")
    elsif message_body.downcase == "in"
      text_user_id = User.where(phone: @incoming_number[2..-1]).first.id
      if user_rsvps.include?(text_user_id)
        send_sms("You have already rsvp'd to the game on #{date} at #{time}")
      else
        if event.max == user_rsvps.length
          send_sms("Sorry, the game on #{date} at #{time} has reached the max capacity of #{event.max} players.")
        else
          Rsvp.create(event_id: event.id, user_id: text_user_id, color: "none")
          send_sms("You have successfully rsvp'd to the game on #{date} at #{time}.\n\nYou can reply 'out' anytime prior to the game to remove your rsvp.")
        end
      end
    elsif message_body.downcase == "out"
      text_user_id = User.where(phone: @incoming_number[2..-1]).first.id
      if user_rsvps.include?(text_user_id)
        Rsvp.where(user_id: text_user_id).destroy_all
        send_sms("You have successfully removed your rsvp to the game on #{date} at #{time}.\n\nYou can reply 'in' anytime prior to the game to add your rsvp (if there is room).")
      else
        send_sms("You do not have an rsvp to the game on #{date} at #{time}.\n\nYou can reply 'in' anytime prior to the game to add your rsvp (if there is room).")
      end
    else
      send_sms("Sorry, command not recognized. Please text 'in' if you would like to rsvp to the game on #{date} at #{time}.\n\nIf you have already rsvp'd to this game, you can text 'out' to remove your rsvp.")
    end
    render "api/notifications/index"
  end

  def boot_twilio
      account_sid = Rails.application.secrets.twilio_sid
      auth_token = Rails.application.secrets.twilio_token
      @client = Twilio::REST::Client.new account_sid, auth_token
  end

  def send_sms(message)
    sms = @client.messages.create(
      from: Rails.application.secrets.twilio_number,
      to: @incoming_number,
      body: message
    )
  end
end
