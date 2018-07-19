class FriendshipController < ApplicationController
  def send_request
    @user = current_user
    @friend = User.find(params[:friend])
    friendship = Friendship.new(request_user_id: @user.id, accept_userid: @friend.id)
    friendship.save
    redirect_to "/"
  end

  def accept_request
    @user = current_user
    @friend = User.find(params[:friend])
    friendship = Friendship.where(accept_request: params[:user], send_request: params[:friend])
    friendship.accepted = true
    friendship.save
    redirect_to "/"
  end
end
