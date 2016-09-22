class Api::ResponsesController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def create
    debugger;
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
