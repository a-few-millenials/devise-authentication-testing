class Admins::UsersController < ApplicationController
    before_action :authenticate_user!
    def index
        user_authenticate
        @users = User.all
    end
end
