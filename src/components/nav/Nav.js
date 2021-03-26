import React from 'react';

import './Nav.css';
import NavLink from '../nav-link/nav-link';
import menuBtn from '../../images/menu.png';

function Nav({
  isMobile,
  menuOpen,
  isLoggedIn,
  toggleMenu,
}) {

  function toggleMobileMenu() {
    toggleMenu();
  }

  return (

    <nav className="navbar">
      <a href="/" className="navbar__title">NewsExplorer</a>
      { isMobile && (
        <>
          <button type="button" onClick={toggleMobileMenu} className="navbar__button">
            <img alt="menu" src={menuBtn} />
          </button>
          <NavLink />
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
                {
                  user.name
                }
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
