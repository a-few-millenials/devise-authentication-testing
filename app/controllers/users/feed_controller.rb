class Users::FeedController < ApplicationController
  def index
  end

  def new
  end

  def friendRequests
    users = User.join("INNER JOIN friendships ON users.id = friendships.request_user_id")
    users_array =  Array.new
    users.each do |u|
      if u.request_user_id = NULL OR u.accepted = NULL
      else
        users_array.concat(u)
      end
    end
    logger.debug "Current array: #{users_array.attributes.inspect}"
  end
end
