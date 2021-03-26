import React, { useState } from 'react';

import './Nav.css';
import NavLink from '../nav-link/nav-link';
import openbtn from '../../images/menu.png';
import closebtn from '../../images/close.png';

function Nav({
  isMobile,
  menuOpen,
  isLoggedIn,
  toggleMenu,
}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuBtn = mobileMenu ? closebtn : openbtn;
  const navClass = mobileMenu ? 'navbar navbar-active' : 'navbar';

  function toggleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (

    <nav className={navClass}>
      <a href="/" className="navbar__title">NewsExplorer</a>
      { isMobile && (
        <>
          <button type="button" onClick={toggleMobileMenu} className="navbar__button">
            <img alt="menu" src={menuBtn} />
          </button>
          { mobileMenu && (
            <NavLink />
          )}

        </>
      )}
      ;
      { !isMobile && (
        <ul className="navbar__links-container">
          <li className="navbar__linkhome"> Home </li>
          { isLoggedIn && (
            <>
              <li className="navbar__linkSaved"> Saved Articles </li>
              <li className="navbar__linkUser">
                <p>UserName</p>
              </li>
            </>
          )}
        </ul>
      )}
      ;
    </nav>
  );
}

export default Nav;
