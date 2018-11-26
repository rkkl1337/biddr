class Auction < ApplicationRecord
    belongs_to :user
    has_many :bids, dependent: :destroy

    validates :title, presence: true
    validates :details, presence: true
    validates :end_date, presence: true
    validates :price, presence: true

end
