import React from 'react';
import BidDetails from './BidDetails';

function BidList(props) {
  return (
    <>
    <h1>Bids</h1>
    <ul className="BidList">
      {props.bids.map(bid => (
        <li key={bid.id}>
          <BidDetails {...bid} />
        </li>
      ))}
    </ul>
    </>
  );
}

export default BidList;