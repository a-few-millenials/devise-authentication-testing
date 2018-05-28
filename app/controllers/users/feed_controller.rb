class Users::FeedController < ApplicationController
  def index
  end

  def new
  end

  def friendRequests
    users = User.join("INNER JOIN friendships ON users.id = friendships.request_user_id")
    @array = Array.new
    users.each do |u|
      if u.request_user_id is NULL OR u.accepted is NULL
      else
        @array.concat(u)
      end
    end
    logger.debug "Current array: #{users_array.attributes.inspect}"
  end
end
