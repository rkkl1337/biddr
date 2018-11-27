import React from 'react';

function BidDetails(props) {
  return (
    <div className="BidDetails">
      <p>${props.bid_price}</p>
      {/* <p>By {props.user.username}</p> */}
      <p>Created at: {props.created_at}</p>
    </div>
  );
}

export default BidDetails;