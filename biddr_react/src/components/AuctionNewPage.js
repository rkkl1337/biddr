import React, { Component } from 'react';
import AuctionForm from './AuctionForm';
import { Session, Auction } from '../requests';

class AuctionNewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialAuction,
            errors: []
        };
        this.updateField = this.updateField.bind(this);
        this.createAuction = this.createAuction.bind(this);

    }

    updateField(param) {
        this.setState(param);
    }
    createAuction(e) {
        e.preventDefault();
        const { errors, ...auction } = this.state;
        Session.create({
          email: 'lbj@user.com',
          password: 'supersecret',
        })
          .then(() => {
            return Auction.create({
              ...auction,
            });
          })
          .then(({ id, errors }) => {
            if (errors) {
              this.setState({ errors });
            } else {
              this.props.history.push(`/auctions/${id}`);
            }
        });
    }
    render() {
        return (
          <div className="AuctionNewPage">
            <AuctionForm
              {...this.state}
              onChange={this.updateField}
              onSubmit={this.createAuction}
            />
          </div>
        );
    }
      
}

const initialAuction = {
    title: '',
    details: '',
    end_date: '',
    price: '',
};

export default AuctionNewPage;
