import React, { Component } from 'react';
import { Auction } from '../requests';
import AuctionDetails from './AuctionDetails';

class AuctionShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            auction: null
        };
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
          </div>
        );
    }
}

export default AuctionShowPage;

