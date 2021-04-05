import React from 'react';

import './Nav.css';
import { MobileNav, Navigation } from '../navbars/Navbars';

function Nav({
  isMobile,
  isLoggedIn,
  toogleMobNav,
  handleLogout,
}) {
  return (
    isMobile ? (
      <MobileNav
        handleLogout={handleLogout}
        isOpen={false}
        toogleMobNav={toogleMobNav}
        isLoggedIn={isLoggedIn}
      />
    )
      : <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
  );
}

export default Nav;
