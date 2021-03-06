class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  scope :get_friends, -> { find_by_sql("SELECT * FROM users INNER JOIN friendship on users.id = friendship.request_user_id INNER JOIN ( SELECT * FROM users ) temp_users ON friendship.accept_userid = temp_users.id;")}
  scope :find_requests, -> (user){ find_by_sql(["SELECT * FROM users INNER JOIN friendships ON users.id = friendships.accept_user_id WHERE users.id = ?", user]) }

  has_and_belongs_to_many(:users,
    :join_table => "friendship",
    :foreign_key => "request_user_id",
    :association_foreign_key => "accept_user_id")

  has_attached_file :image, styles: { :thumb => "100x100" }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
