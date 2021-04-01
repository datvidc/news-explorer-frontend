import React from 'react';

import './nav-link.css';

function NavLink({
  user,
}) {
  return (

    <ul className="navbar__links-container">
      {
        user && (
          <>
            <li>
              <a href="/" className="navlink__home"> Home </a>
            </li>
            <li>
              <a className="navlink__home" href="/"> Saved Articles </a>
            </li>
            <li>
              <button className="navlink__button" type="button" href="/"> UserName </button>
            </li>
          </>
        )

      }
      {
        !user && (
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
