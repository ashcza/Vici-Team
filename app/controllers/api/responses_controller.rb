class Api::ResponsesController < ApplicationController
  # skip_before_action :verify_authenticity_token
  #


  def create
    message_body = params["Body"].downcase
    @incoming_number = params["From"]
    boot_twilio
    if @incoming_number == "+19162010603"
      send_sms("You have been subscribed to CSS tips by Rob Shneiderman. Today's tip: use flexbox for responsive web design")
    elsif message_body == "hello"
      send_sms("Well hello")
    else
      send_sms("Who dis")
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
