import React from 'react';
import './Header.css';

import Nav from '../nav/Nav';

function Header(props) {
  const { mobile, mobileMenu, loggedIn, MobileMenuToggle } = props;

  return (
    <header className="header">
      <Nav
        isMobile={mobile}
        menuOpen={mobileMenu}
        isLoggedIn={loggedIn}
        toggleMenu={MobileMenuToggle}
      />

    </header>
  );
}
export default Header;
