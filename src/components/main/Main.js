import React, { useContext } from 'react';

import './Main.css';

import Header from '../header/Header';
import Overview from '../overview/Overview';
import CurrentUserContext from '../../context/CurrentUserContext';

function Main(props) {
  const {
    toogleMobNav,
    device,

    mainPage,
    handleLogout,
    signmeup,
    handleSearch,
    setLoading,
    savedArticleList,
  } = props;

  const user = useContext(CurrentUserContext);

  let isMobile;
  if (device === 'mobile') {
    isMobile = true;
  } else {
    isMobile = false;
  }
  const userLoggedIn = !!user;

  return (
    <>
      {mainPage && (
        <div className="main">
          <Header
            handleSignin={signmeup}
            handleLogout={handleLogout}
            mobile={isMobile}
            loggedIn={userLoggedIn}
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
            loggedIn={userLoggedIn}
            toogleMobNav={toogleMobNav}
            isMain={false}
          />
          <Overview
            articles={savedArticleList}
            savedArticleList={savedArticleList}
          />
        </div>
      )}
    </>
  );
}

export default Main;
