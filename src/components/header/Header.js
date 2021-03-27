import React from 'react';
import './Header.css';

import Nav from '../nav/Nav';
import SearchForm from '../searchForm/SearchForm';

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
            <SearchForm />
          </header>
        ) : (
          <header className="header-savednews">
            <Nav
              isMobile={mobile}
              menuOpen={mobileMenu}
              isLoggedIn={loggedIn}
              toggleMenu={MobileMenuToggle}
            />
            <SearchForm />
          </header>
        )
      }

    </>
  );
}
export default Header;
