import React, { Component } from 'react';
import { Auction } from '../requests';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';

class AuctionShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            auction: null
        };  
        this.createBid = this.createBid.bind(this);
    }

    createBid(e) {
      e.preventDefault();
      const { bid_price } = e.currentTarget.elements;
      const bid = {bid_price: bid_price.value}
      return fetch(`http://localhost:3000/api/v1/auctions/${this.props.match.params.id}/bids`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({bid})
        }).then(res => res.json())
    }
    componentDidMount() {
        Auction.one(this.props.match.params.id).then(auction => {
          this.setState({
            isLoading: false,
            auction
          });
        });
    }

    render() {
        const { auction, isLoading } = this.state;
        if (isLoading) {
          return <div>Loading....</div>;
        }
        return (
          <div className="AuctionShowPage">
            <AuctionDetails {...auction} />
            <div className="BidForm">
              <form onSubmit={this.createBid}>
                <input type="number" name="bid_price" />
                <input type="submit" value="Bid" />
              </form>
            </div>
            <BidList bids={auction.bids} />
          </div>
        );
    }
}

export default AuctionShowPage;

