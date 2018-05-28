class FriendshipController < ApplicationController
    def send_request
        friendship = Friendship.new do |f|
            f.send_request = @user
            f.accept_request = @friend
        end
    end

    def accept_request
        friendship = Friendship.where(accept_request: params[:user], send_request: params[:friend])
        friendship.accepted = true
    end
end
