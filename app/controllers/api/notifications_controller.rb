class Api::NotificationsController < ApplicationController

  def create
    black_team = Rsvp.where(event_id: notification_params[:event_id], color: "black").map {|rsvp| User.find(rsvp.user_id).name}
    white_team = Rsvp.where(event_id: notification_params[:event_id], color: "white").map {|rsvp| User.find(rsvp.user_id).name}
    red_team = Rsvp.where(event_id: notification_params[:event_id], color: "red").map {|rsvp| User.find(rsvp.user_id).name}
    red_team = "none" if red_team.length == 0
    event = Event.find(notification_params[:event_id])
    date = event.date.strftime("%A, %b %e")
    time = event.date.strftime("%l:%M %p")
    text_message = "Teams for game on #{date} at #{time}\n\nBlack Team:\n#{black_team.join(', ')}\n\nWhite Team:\n#{white_team.join(', ')}\n\nRed Team:\n#{red_team.join(', ')}"

    event.rsvps.each do |rsvp|
      user = User.find(rsvp.user_id)
      if user.texting
        phone_number = User.find(rsvp.user_id).phone
        send_message(phone_number, text_message)
      end
    end
    send_message("+14843542873", text_message)
    render "api/notifications/index"
  end

  def index
  end

  def server_error
    raise 'A test exception'
  end

  private

  def notification_params
    params.require(:notification).permit(:event_id)
  end

  def send_message(phone_number, text_message)

    account_sid = Rails.application.secrets.twilio_sid
    auth_token = Rails.application.secrets.twilio_token

    @twilio_number = '+14842026246'
    @client = Twilio::REST::Client.new account_sid, auth_token
    message = @client.account.messages.create(
      :from => @twilio_number,
      :to => phone_number,
      :body => text_message,
      # US phone numbers can make use of an image as well.
      # :media_url => image_url
    )
    puts message.to
  end
end
