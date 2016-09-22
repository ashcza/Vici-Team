class Api::NotificationsController < ApplicationController

  def create(params[:event_id])
    debugger;
    @text_message = "This is my first text woo"

    phone_number = '+14843542873'
    send_message(phone_number, @text_message)

      flash[:success] = "Your text has been sent."
    rescue
      flash[:alert] = "Something prob went wrong."
    end


    # redirect_to '/'
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

      @twilio_number = ENV['+14842026246']
      @client = Twilio::REST::Client.new ENV['PN2d304461ea3263d0ddd477436bafd3d7'], ENV['
d3f15bbb2aeea9554ca8d539b7773cd4
']

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
