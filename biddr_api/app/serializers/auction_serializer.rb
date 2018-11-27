class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :end_date, :price, :created_at

  belongs_to :user
  has_many :bids
end
