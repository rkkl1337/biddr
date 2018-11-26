class Api::V1::AuctionsController < Api::ApplicationController
    before_action :authenticate_user!, except: [ :index, :show ]
    def create
        auction = Auction.new auction_params
        auction.user = current_user

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
        params.permit(:title, :details, :end_date, :price)
    end

end
