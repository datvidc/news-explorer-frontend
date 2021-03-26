import React from 'react';

import "./nav-link.css";

import menuBtn from '../../images/menu.png';

function NavLink({
  isLoggedIn,
  isMobile
}) {

  return (

    { isMobile && (
      <>
        <button className="navbar__button"> <img src={menuBtn}></img> </button>
        <MobileMenu />
      </>
    )
  }

  );
}

export default NavLink;