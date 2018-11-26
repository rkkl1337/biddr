class Api::V1::BidsController < ApplicationController
    def create
        bid = Bid.new bid_params

        bid.save!
        render json: bid
    end

    private
    def bid_params
        params.require(:bid).permit(:price)
    end
end
