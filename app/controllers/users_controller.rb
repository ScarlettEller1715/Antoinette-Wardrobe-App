class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

   def show
    user = find_user
    render json: user
   end
    
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created 
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_confirmation, :email)
    end

    def find_user 
        User.find_by(id: session[:user_id])
    end
end
