import React from 'react';

import './Main.css';

import Header from '../header/Header';
import Overview from '../overview/Overview';

function Main(props) {
  const {
    toogleMobNav,
    device,
    knownUser,
    mainPage,
    handleLogout,
    signmeup,
    handleSearch,
    setLoading,
    savedArticleList,
  } = props;

  let isMobile;
  if (device === 'mobile') {
    isMobile = true;
  } else {
    isMobile = false;
  }

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
