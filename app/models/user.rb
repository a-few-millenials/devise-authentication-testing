class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_and_belongs_to_many(:users,
    :join_table => "friendships",
    :foreign_key => "request_user_id",
    :association_foreign_key => "accept_user_id")

  has_attached_file :image, styles: { :thumb => "100x100" }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
