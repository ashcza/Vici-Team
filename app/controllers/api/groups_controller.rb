class Api::GroupsController < ApplicationController

  include Geokit::Geocoders

  def create

    @group = Group.new(group_params)
    geoloc = GoogleGeocoder.geocode(@group.location)
    @group.lng = geoloc.lng
    @group.lat = geoloc.lat
    @group.creation_date = Time.now
    if @group.save
      render "api/groups/new"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def index
    @groups = Group.all
    if params["group"]
      if group_params[:distance] != "any distance"
        distance = group_params[:distance].to_i
        group_matches = Group.within(distance, :origin => "#{group_params[:location]}")

        location_ids = group_matches.map{|group_match| group_match.id}
        @groups = @groups.where(id: location_ids)
      end


      if group_params[:search_string] != ""

        keyword = "%#{group_params[:search_string]}%"
        @groups = @groups.where('lower(name) Like ?', keyword.downcase)
      end
    end
    render :index
  end


  def show
    if params[:group]
      if group_params[:single] == "true"
        @groups = [Group.find(params[:id])]
        render :index
      end
    else
      group = Group.find(params[:id])
      @members = group.members
      render :show
    end
  end

  def destroy
    @group = Group.find(params[:id])
    if @group.destroy
      render "api/groups/new"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, :description, :organizer_id, :organizer_name, :location, :img, :distance, :search_string, :single)
  end
end
