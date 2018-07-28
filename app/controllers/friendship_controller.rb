class FriendshipController < ApplicationController
  def index
    @user = current_user.id
    @users = User.all
    @friendships = User.find_requests(@user)
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

  def get_friend_requests_old
    @user = current_user
    @users = User.all
    User.create_friendship_table
    @friendships = User.find_requests(@user.id)

    respond_to do |format|
      format.js json: @friendships, status: :ok
      format.html
    end
  end

  def get_friend_requests
    delete_temp_table = 'DROP TEMPORARY TABLE IF EXISTS temp_users;'
    create_temp_table = 'CREATE TEMPORARY TABLE IF NOT EXISTS temp_users SELECT request_user_id FROM friendships INNER JOIN users ON friendships.accept_user_id = users.id WHERE users.id = 1'
    get_friend_requests = 'SELECT * FROM temp_users INNER JOIN users ON temp_users.request_user_id = users.id;'

    ActiveRecord::Base.connection.execute(delete_temp_table)
    ActiveRecord::Base.connection.execute(create_temp_table)
    @friendships = ActiveRecord::Base.connection.execute(get_friend_requests)
  end
end
