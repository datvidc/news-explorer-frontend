import React from 'react';

import './Main.css';

import Header from '../header/Header';

function Main(props) {
  const {
    toogleMobNav, device, knownUser, mainPage, handleLogout,
  } = props;

  let isMobile;
  if (device === 'mobile') {
    isMobile = true;
  } else {
    isMobile = false;
  }

  return (
    <div className="main">
      <Header
        handleLogout={handleLogout}
        mobile={isMobile}
        loggedIn={knownUser}
        toogleMobNav={toogleMobNav}
        isMain={mainPage}
      />
    </div>

  );
}

export default Main;
