import React from 'react';

import './Nav.css';
import { MobileNav, Navigation } from '../navbars/Navbars';

function Nav({
  isMobile,
  isLoggedIn,
  toogleMobNav,
  handleLogout,
  isMain,
}) {
  return (
    isMobile ? (
      <MobileNav
        handleLogout={handleLogout}
        isOpen={false}
        toogleMobNav={toogleMobNav}
        isLoggedIn={isLoggedIn}
        isMain={isMain}
      />
    )
      : <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} isMain={isMain} />
  );
}

export default Nav;
