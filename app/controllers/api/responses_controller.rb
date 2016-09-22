class Api::ResponsesController < ApplicationController

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
  end

end
