import React from 'react';
import { Link } from 'react-router-dom';

import './nav-link.css';
import logoutImg from '../../images/logout.png';
import currentUserContext from '../../context/CurrentUserContext';

function NavLink({
  user, handleLogout, handleSignin,
}) {
  const currentUser = React.useContext(currentUserContext);

  return (

    <ul className="navbar__links-container">
      {
        user && (
          <>
            <li>
              <a href="/" className="navlink__home"> Home </a>
            </li>
            <li>
              <Link className="navlink__home" to="/saved-news"> Saved Articles </Link>
            </li>
            <li>
              <button className="navlink__button" type="button" onClick={handleLogout}>
                {currentUser.data.name} <img alt="logOut" src={logoutImg} />
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
