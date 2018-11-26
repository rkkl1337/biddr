class Auction < ApplicationRecord
    belongs_to :user
    has_many :bids, dependent: :destroy

    validates :title, presence: true
    validates :description, presence: true
    validates :end_dage, presence: true
    validates :price, presence: true

end
