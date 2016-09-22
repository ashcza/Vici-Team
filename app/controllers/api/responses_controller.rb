class Api::ResponsesController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    body = params['Body'].downcase
    twiml = Twilio::TwiML::Response.new do |r|
      if body == "hello"
        r.Message "Hi!"
      elsif body == "bye"
        r.Message "Goodbye"
      end
    end
    twiml.text
    render "api/notifications/index"
  end

end
