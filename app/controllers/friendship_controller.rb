class FriendshipController < ApplicationController
    def send_request
        @user = User.find(params[:user])
        @friend = User.find(params[:friend])
        friendship = Friendship.new(request_user_id: @user, accept_user_id: @friend)
        logger.debug "Current User: #{@user.attributes.inspect}"
        logger.debug "Other User : #{@friend.attributes.inspect}"
        friendship.save
        redirect_to "/"
    end

    def accept_request
        @user = User.find(params[:user])
        @friend = User.find(params[:friend])
        friendship = Friendship.where(accept_request: params[:user], send_request: params[:friend])
        friendship.accepted = true
        friendship.save
        redirect_to "/"
    end
end
