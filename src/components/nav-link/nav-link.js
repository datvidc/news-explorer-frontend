import React from 'react';

import './nav-link.css';

function NavLink({
  user, name, handleLogout, handleSignin,
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
              <a className="navlink__home" href="/saved-news"> Saved Articles </a>
            </li>
            <li>
              <button className="navlink__button" type="button" onClick={handleLogout}>
                {name}
              </button>
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
              <button className="navlink__button" onClick={handleSignin} type="button" href="/"> Log In </button>
            </li>
          </>
        )
      }
    </ul>
  );
}

export default NavLink;
