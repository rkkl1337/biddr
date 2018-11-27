import React from 'react';

function AuctionDetails(props) {
    return (
      <div className="AuctionDetails">
        <p>{props.title}</p>
        <p>{props.details}</p>
        <p>By {props.user.username}</p>
        <p>Created at: {props.created_at}</p>
      </div>
    );
  }
  
  export default AuctionDetails;