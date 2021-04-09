import React from 'react';
import './Header.css';

import Nav from '../nav/Nav';
import SearchForm from '../searchForm/SearchForm';

function Header(props) {
  const {
    mobile, loggedIn, toogleMobNav, isMain, handleLogout, handleSignin,
  } = props;

  return (
    <>
      {
        isMain ? (
          <>
            <header className="header">
              <Nav
                handleSignin={handleSignin}
                isMobile={mobile}
                isLoggedIn={loggedIn}
                toogleMobNav={toogleMobNav}
                handleLogout={handleLogout}
                isMain={isMain}
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
                handleLogout={handleLogout}
                isMain={isMain}
              />
            </header>

          </>
        )
      }

    </>
  );
}
export default Header;
