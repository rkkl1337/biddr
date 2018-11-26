class Api::V1::AuctionsController < ApplicationController
    def create
        auction = Auction.new auction_params

        auction.save!
        render json: auction
    end

    def show
        render json: auction
    end

    def index
        auctions = Auction.order created_at: :desc
        render json: auctions
    end

    def destroy
        auction.destroy
        render json: {status: :success}
    end

    private

    def auction
        Auction.find params[:id]
    end

    def auction_params
        params.require(:auction).permit(:title, :description, :end_date, :price)
    end
end
