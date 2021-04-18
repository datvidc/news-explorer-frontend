import React, { useContext } from 'react';

import './Nav.css';
import { MobileNav, Navigation } from '../navbars/Navbars';
import CurrentUserContext from '../../context/CurrentUserContext';

function Nav({
  isMobile,

  toogleMobNav,
  handleLogout,
  isMain,
  handleSignin,
}) {
  const user = useContext(CurrentUserContext);
  const userLoggedIn = !!user;

  return (
    isMobile ? (
      <MobileNav
        handleSignin={handleSignin}
        handleLogout={handleLogout}
        isOpen={false}
        toogleMobNav={toogleMobNav}
        isLoggedIn={userLoggedIn}
        isMain={isMain}
      />
    )
      : (
        <Navigation
          handleSignin={handleSignin}
          isLoggedIn={userLoggedIn}
          handleLogout={handleLogout}
          isMain={isMain}
        />
      )
  );
}

export default Nav;
