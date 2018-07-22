class Friendship < ApplicationRecord
    scope :find_requests, -> (user){ Friendship.joins("INNER JOIN users ON friendships.accept_user_id = users.id").where(accept_user_id: user) }
end
