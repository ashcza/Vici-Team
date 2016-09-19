class Api::RsvpsController < ApplicationController

  def create
    @rsvp = Rsvp.new(user_id: rsvp_params[:user_id], event_id: rsvp_params[:event_id])
    if @rsvp.save
      @event_id = params[:event_id]
      render "api/rsvps/show"
    else
      render json: @rsvp.errors.full_messages, status: 422
    end
  end

  def show
    # event = Event.find(params[:eventId])
    # @eventId = params[:eventId]
    # @rsvpExists = event.attendees.to_a.include?(User.find(params[:userId]))
    # render :show
  end



  def destroy
    @rsvp = Rsvp.find_by(user_id: rsvp_params[:user_id], event_id: rsvp_params[:event_id])
    if @rsvp.destroy
      render "api/rsvps/show", status: 200
    else
      render json: @rsvp.errors.full_messages, status: 422
    end
  end

  private

  def rsvp_params
    params.require(:rsvp).permit(:user_id, :event_id, :id)
  end
end
