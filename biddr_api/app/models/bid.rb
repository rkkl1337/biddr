class Bid < ApplicationRecord
    belongs_to :user
    belongs_to :auction

    validates :bid_price, presence: true
end
