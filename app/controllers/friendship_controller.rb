class FriendshipController < ApplicationController
    def send_request
        @user = User.find(params[:user])
        @friend = User.find(params[:friend])
        friendship = Friendship.new do |f|
            f.send_request = @user
            f.accept_request = @friend
        end
        friendship.save
        redirect_to action: "root"
    end

    def accept_request
        @user = User.find(params[:user])
        @friend = User.find(params[:friend])
        friendship = Friendship.where(accept_request: params[:user], send_request: params[:friend])
        friendship.accepted = true
        friendship.save
        redirect_to action: "root"
    end
end
