import React from 'react';
import './Header.css';

import Nav from '../nav/Nav';

function Header(props) {
  const {
    mobile, mobileMenu, loggedIn, MobileMenuToggle, isMain,
  } = props;

  return (
    <>
      {
        isMain ? (
          <header className="header">
            <Nav
              isMobile={mobile}
              menuOpen={mobileMenu}
              isLoggedIn={loggedIn}
              toggleMenu={MobileMenuToggle}
            />
          </header>
        ) : (
          <header className="header-savednews">
            <Nav
              isMobile={mobile}
              menuOpen={mobileMenu}
              isLoggedIn={loggedIn}
              toggleMenu={MobileMenuToggle}
            />
          </header>
        )
      }

    </>
  );
}
export default Header;
