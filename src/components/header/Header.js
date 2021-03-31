import React from 'react';
import './Header.css';

import Nav from '../nav/Nav';
import SearchForm from '../searchForm/SearchForm';

function Header(props) {
  const {
    mobile, loggedIn, toogleMobNav, isMain,
  } = props;

  return (
    <>
      {
        isMain ? (
          <>
            <header className="header">
              <Nav
                isMobile={mobile}
                isLoggedIn={loggedIn}
                toogleMobNav={toogleMobNav}
              />
            </header>
            <SearchForm />
          </>
        ) : (
          <>
            <header className="header-savednews">
              <Nav
                isMobile={mobile}
                isLoggedIn={loggedIn}
                toogleMobNav={toogleMobNav}
              />
            </header>
            <SearchForm />
          </>
        )
      }

    </>
  );
}
export default Header;
