class BidSerializer < ActiveModel::Serializer
  attributes :id, :bid_price, :created_at
  belongs_to :user
end
