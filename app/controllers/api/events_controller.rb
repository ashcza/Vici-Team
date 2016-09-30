class Api::EventsController < ApplicationController
  def index
    group = Group.find(event_params[:group_id])
    @event = group.events.where("date > ?", Date.today).sort_by{|a| a.date}.first
    render :index
  end

  def show
    group = Group.find(params[:id])
    @events = group.events.where("date > ?", Date.today).sort_by{|a| a.date}
    @date_order = @events.map(&:id)
    render :show
  end

  def create
    @event = Event.new(event_params)
    @event.description = "No description" if @event.description == ""
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
    params.require(:event).permit(:title, :description, :date, :duration, :group_id, :user_id, :id, :max)
  end

end
