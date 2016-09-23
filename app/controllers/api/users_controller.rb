class Api::UsersController < ApplicationController

  def create
		@user = User.new(user_params)
    @user.texting = true
		if @user.save
			login(@user)
      debugger;
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

  def update
    if user_params[:texting]
      @user = User.find(user_params[:user_id])
      @user.update(texting: !@user.texting)
    end
    render "api/groups/new"
  end


	private

	def user_params
		params.require(:user).permit(:username, :password, :email, :name, :texting, :id, :user_id, :phone, :code)
	end

end
