class BidSerializer < ActiveModel::Serializer
  attributes :id, :bid_price
  belongs_to :user
end
