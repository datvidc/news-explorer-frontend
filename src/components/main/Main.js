import React from 'react';

import './Main.css';

import Header from '../header/Header';

function Main(props) {
  const { toogleMobNav, device, knownUser, toggleMenu } = props;
  let isMobile;
  if (device === 'mobile') {
    isMobile = true;
  } else {
    isMobile = false;
  }

  return (
    <div className="main">
      <Header
        mobile={isMobile}
        mobileMenu={toogleMobNav}
        loggedIn={knownUser}
        MobileMenuToggle={toggleMenu}
      />
    </div>

  );
}

export default Main;
