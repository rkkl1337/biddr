import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  const {currentUser} = props;
  const handleSignOutClick = event => {
    event.preventDefault();
     if (typeof props.onSignOut === "function") {
      props.onSignOut();
    }
  };
  return (
    <div className="NavBar">
      <NavLink to="/">Home</NavLink>|<NavLink to="/auctions">Auctions</NavLink>|
      
      {currentUser ? (
        <span>
          <>
            <NavLink to="/auctions/new">New Auction</NavLink>
            |
            <span>{currentUser.username}</span>
            |
            <a href="#nope" onClick={handleSignOutClick}>Sign Out</a>
          </>
        </span>
      ) : (
        <NavLink exact to="/session/new">
          Sign In
        </NavLink>
      )}
    </div>
  );
}

export default NavBar;