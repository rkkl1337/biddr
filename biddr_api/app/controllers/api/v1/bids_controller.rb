class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user!
    before_action :authorize_user!
    before_action :auction
    def create
        bid = Bid.new bid_params
        bid.auction = auction
        bid.user = current_user
        bid.save!
        render json: bid
    end

    private
    def bid_params
        params.require(:bid).permit(:bid_price)
    end

    def auction
        Auction.find params[:auction_id]
    end


    def authorize_user!
        unless can? :bid, auction
            render json: {status: :error, message: "Can't bid on own auctions!"}
        end
    end
end