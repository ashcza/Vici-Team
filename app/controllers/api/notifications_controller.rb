class Api::NotificationsController < ApplicationController

  def create
    debugger;
    @text_message = "This is my first text woo"
    phone_number = '+14843542873'
    send_message(phone_number, @text_message)

      flash[:success] = "It works"
    # rescue
    #   flash[:alert] = "Something prob went wrong."
    # end

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
