import React from 'react';

import './nav-link.css';

function NavLink({
  isLoggedIn,
}) {
  return (

    <ul className="navbar__links-container">
      {
        isLoggedIn && (
          <>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/"> Saved Articles </a>
            </li>
            <li>
              <button type="button" href="/"> UserName </button>
            </li>
          </>
        )

      }
      {
        !isLoggedIn && (
          <>
            <li>
              <a className="navlink__home" href="/"> Home </a>
            </li>
            <li>
              <button className="navlink__button" type="button" href="/"> Log In </button>
            </li>
          </>
        )
      }
    </ul>
  );
}

export default NavLink;
