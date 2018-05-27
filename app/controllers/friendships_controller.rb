class FriendshipsController < ApplicationController
    def create
        @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
        if @friendship.save
            flash[:notice] = "Added Friend"
            redirect_to action: "admins/users#index"
        else
            flash[:notice] = "Unable to add friend"
            redirect_to action: "admins/users#index"
        end
    end
end
