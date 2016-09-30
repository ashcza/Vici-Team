class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render "api/memberships/show"
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find_by(membership_params)
    if @membership.destroy
      render "api/memberships/show"
    end
  end

  def membership_params
    params.require(:membership).permit(:user_id, :group_id)
  end

end
