import React from 'react';

import './Nav.css';
import { MobileNav, Navigation } from '../navbars/Navbars';

function Nav({
  isMobile,
  isLoggedIn,
  toogleMobNav,
}) {
  return (
    isMobile ? (
      <MobileNav
        isOpen={false}
        toogleMobNav={toogleMobNav}
        isLoggedIn={isLoggedIn}
      />
    )
      : <Navigation isLoggedIn={isLoggedIn} />
  );
}

export default Nav;
