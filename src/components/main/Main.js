import React, { useContext } from 'react';

import './Main.css';

import Header from '../header/Header';
import Overview from '../overview/Overview';

import CurrentUserContext from '../../context/CurrentUserContext';

function Main(props) {
  const {
    toogleMobNav,
    device,
    knownUser,
    mainPage,
    handleLogout,
    signmeup,
    articles,
    handleSearch,
    setLoading,
  } = props;

  const user = useContext(CurrentUserContext);

  let isMobile;
  if (device === 'mobile') {
    isMobile = true;
  } else {
    isMobile = false;
  }
  console.log(user);
  return (
    <>
      {mainPage && (
        <div className="main">
          <Header
            handleSignin={signmeup}
            handleLogout={handleLogout}
            mobile={isMobile}
            loggedIn={knownUser}
            toogleMobNav={toogleMobNav}
            isMain={mainPage}
            handleSearch={handleSearch}
            setLoading={setLoading}
          />
        </div>
      )}
      {!mainPage && (
        <div className="main-saved">
          <Header
            handleLogout={handleLogout}
            mobile={isMobile}
            loggedIn={knownUser}
            toogleMobNav={toogleMobNav}
            isMain={false}
          />
          <Overview articles={articles} />
        </div>

      )}
    </>
  );
}

export default Main;
