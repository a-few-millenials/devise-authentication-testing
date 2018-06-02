class Users::FeedController < ApplicationController
  def index
    logger.debug "Current array: #{users.attributes.inspect}"
  end

  def new
    logger.debug "Current array: #{users.attributes.inspect}"
  end

  def friend_request
    @Users = User.get_friends
    @app_current_user = current_user
    
    logger.debug "App Current User: #{@app_current_user.attributes.inspect}"
    #@users = User.joins("INNER JOIN friendships ON users.id = friendships.request_user_id INNER JOIN users ON friendships.accept_user_id = users.id")
    #dropTable = "DROP TEMPORARY TABLE IF NOT EXISTS temp_users;"
    #createTable = "CREATE TEMPORARY TABLE IF NOT EXISTS temp_users (temp_id BIGINT(20) NOT NULL,temp_email VARCHAR(255) NOT NULL,temp_encrypted_password VARCHAR(255) NOT NULL,temp_reset_password_token varchar(255),temp_reset_password_sent_at DATETIME,temp_remember_created_at DATETIME,temp_sign_in_count INT(11) NOT NULL,temp_current_sign_in_at DATETIME,temp_last_sign_in_at DATETIME,temp_current_sign_in_ip VARCHAR(255),temp_last_sign_in_ip VARCHAR(255),temp_created_at DATETIME NOT NULL,temp_updated_at DATETIME);"
    #insertTable = "INSERT INTO temp_users SELECT * FROM users;"
    #joinTable = "SELECT * FROM users INNER JOIN friendships ON users.id = friendships.request_user_id INNER JOIN temp_users ON friendships.accept_user_id = temp_users.temp_id;"

    #ActiveRecord::Base.connection.execute(dropTable)
    #ActiveRecord::Base.connection.execute(createTable)
    #ActiveRecord::Base.connection.execute(insertTable)
    #@users = ActiveRecord::Base.connection.execute(joinTable)
  end
end
