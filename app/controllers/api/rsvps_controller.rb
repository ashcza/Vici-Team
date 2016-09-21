class Api::RsvpsController < ApplicationController

  def index

  end


  def create
    @rsvp = Rsvp.new(user_id: rsvp_params[:user_id], event_id: rsvp_params[:event_id], color: "none")
    rsvp_event = Event.find(rsvp_params[:event_id])
    if (rsvp_event.rsvps.count < rsvp_event.max) && @rsvp.save
      @event_id = params[:event_id]
      render "api/rsvps/show"
    else
      render json: @rsvp.errors.full_messages, status: 422
    end
  end

  def show
  end



  def destroy
    @rsvp = Rsvp.find_by(user_id: rsvp_params[:user_id], event_id: rsvp_params[:event_id])
    if @rsvp.destroy
      render "api/rsvps/show", status: 200
    else
      render json: @rsvp.errors.full_messages, status: 422
    end
  end

  def update
    @rsvp = Rsvp.find_by(user_id: rsvp_params[:user_id], event_id: rsvp_params[:event_id])
    @rsvp.update(color: rsvp_params[:color])
    @event = @rsvp.event
    render "api/events/index", status: 200
  end

  private

  def rsvp_params
    params.require(:rsvp).permit(:user_id, :event_id, :color, :id)
  end
end
