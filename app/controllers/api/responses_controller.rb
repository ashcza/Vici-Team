class Api::ResponsesController < ApplicationController
  # skip_before_action :verify_authenticity_token
  #
  # def create
  #   body = params['Body'].downcase
  #   twiml = Twilio::TwiML::Response.new do |r|
  #     if body == "hello"
  #       r.Message "Hi!"
  #     elsif body == "bye"
  #       r.Message "Goodbye"
  #     end
  #   end
  #   twiml.text
  #   render "api/notifications/index"
  # end

  def create
    message_body = params["Body"]
    @incoming_number = params["From"]
    boot_twilio

    if message_body == "hello"
      send_sms("Well hello Mr. Zand")
    else
      send_sms("Who dis")
    end

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
