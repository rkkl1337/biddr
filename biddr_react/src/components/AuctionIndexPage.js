import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Auction} from '../requests';

class AuctionIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auctions: []
        }
    }

    componentDidMount() {
        Auction.all().then( auctions => {
          this.setState({ auctions });
        });
    }

    render() {
        return (
            <div className="AuctionIndexPage">
                <h1>Auctions</h1>
                <ul>
                    {this.state.auctions.map(auction => (
                        <li key={auction.id}>
                            <small>
                                <em>{auction.id}</em>
                            </small>{" "}
                            <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default AuctionIndexPage;