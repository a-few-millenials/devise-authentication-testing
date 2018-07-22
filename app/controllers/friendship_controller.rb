class FriendshipController < ApplicationController
  def index
    @user = current_user.id
    @users = User.all
    @friendships = Friendship.find_requests(@user)
  end

  def send_request
    @user = current_user
    @friend = User.find(params[:friend])
    friendship = Friendship.new(request_user_id: @user.id, accept_user_id: @friend.id)
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
