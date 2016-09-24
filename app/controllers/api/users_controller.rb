class Api::UsersController < ApplicationController

  def create
    debugger;
    if Group.find_by(code: user_params[:code]).code === user_params[:code]
  		@user = User.new(username: user_params[:username], name: user_params[:name], password: user_params[:password], email: user_params[:email], phone: user_params[:phone], texting: true)

  		if @user.save
  			login(@user)
        @membership = Membership.create(user_id: @user.id, group_id: Group.find_by(code: user_params[:code]).id)
  			render "api/users/show"
  		else
  			render json: @user.errors.full_messages, status: 422
  		end
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
