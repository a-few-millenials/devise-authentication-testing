class Users::FeedController < ApplicationController
  def index
    logger.debug "Current array: #{users.attributes.inspect}"
  end

  def new
    logger.debug "Current array: #{users.attributes.inspect}"
  end

  def friend_request
    @users = User.joins("INNER JOIN friendships ON users.id = friendships.request_user_id")
    #@array = Array.new
    #users.each do |u|
      #if u.request_user_id is NULL OR u.accepted is NULL
      #else
        #@array.push(u)
      #end
    #end
  end
end
