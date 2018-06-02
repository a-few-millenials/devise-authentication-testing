class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  scope :get_friends, -> { find_by_sql("SELECT * FROM users INNER JOIN friendships ON users.id = friendships.request_user_id INNER JOIN ( SELECT * FROM users ) temp_users ON friendships.accept_user_id = temp_users.id;")}
  
  has_and_belongs_to_many(:users,
    :join_table => "friendships",
    :foreign_key => "request_user_id",
    :association_foreign_key => "accept_user_id")
end
