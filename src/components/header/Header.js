import React, { useContext } from 'react';

import Nav from '../nav/Nav';
import SearchForm from '../searchForm/SearchForm';
import CurrentUserContext from '../../context/CurrentUserContext';

function Header(props) {
  const {
    mobile, toogleMobNav, isMain, handleLogout, handleSignin, handleSearch, setLoading,
  } = props;

  const user = useContext(CurrentUserContext);
  const userLoggedIn = !!user;

  return (
    <>
      {
        isMain ? (
          <>
            <header className="header">
              <Nav
                handleSignin={handleSignin}
                isMobile={mobile}
                isLoggedIn={userLoggedIn}
                toogleMobNav={toogleMobNav}
                handleLogout={handleLogout}
                isMain={isMain}
              />
            </header>
            <SearchForm handleSearch={handleSearch} setLoading={setLoading} />
          </>
        ) : (
          <>
            <header className="header-savednews">
              <Nav
                isMobile={mobile}
                isLoggedIn={userLoggedIn}
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
