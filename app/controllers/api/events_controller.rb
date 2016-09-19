class Api::EventsController < ApplicationController
  def show
    group = Group.find(params[:id])
    @events = group.events
    render :show
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render "api/events/index"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @events = Event.find_by(id: params[:id]).group.events
    @event = Event.find(params[:id])
    if @event.destroy
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    @event.update(event_params)
    render "api/events/index", status: 200
  end

  def event_params
    params.require(:event).permit(:title, :description, :date, :duration, :group_id, :user_id, :id)
  end

end
