import React, { useState } from 'react';

import './Nav.css';
import NavLink from '../nav-link/nav-link';
import openbtn from '../../images/menu.png';
import closebtn from '../../images/close.png';

function Nav({
  isMobile,
  isLoggedIn,
}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuBtn = mobileMenu ? closebtn : openbtn;
  const navClass = mobileMenu ? 'navbar navbar-active' : 'navbar';

  function toggleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  const btntext = isLoggedIn ? 'userName' : 'Sign in';

  return (

    <nav className={navClass}>
      <div className="navbar__top">
        <a href="/" className="navbar__title">NewsExplorer</a>
        {isMobile && (
          <>
            <button type="button" onClick={toggleMobileMenu} className="navbar__button">
              <img alt="menu" src={menuBtn} />
            </button>
          </>
        )}

        {!isMobile && (
          <ul className="navbar__links-container">
            <li className="navbar-border-bottom">
              <a href="/" className="navbar__linkhome">Home </a>
            </li>
            { isLoggedIn && (
              <>
                <li>
                  <a className="navbar__linkSaved navbar__linkhome" href="/saved-news">Saved Articles</a>
                </li>
              </>
            )}
            <li>
              <button type="button" className="navbar__linkUser">
                {btntext}
              </button>
            </li>
          </ul>
        )}
      </div>
      {mobileMenu && (
        <NavLink />
      )}
    </nav>
  );
}

export default Nav;
