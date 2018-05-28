class FriendshipController < ApplicationController
    def send_request
        friendship = Friendship.new do |f|
            f.send_request = @user
            f.accept_request = @friend
        end
    end

    def accept_request

    end
end
