import React from 'react';

import NavLink from '../nav-link/nav-link';
import Popup from '../popup/Popup';
import openbtn from '../../images/menu.png';
import closebtn from '../../images/close.png';
import './Navbars.css';

function OpenNav(props) {
  const { toogleMobNav, menuBtn, isLoggedIn } = props;
  return (
    <Popup>
      <nav className="navbar navbar-active">
        <div className="navbar__top">
          <a href="/" className="navbar__title">NewsExplorer</a>
          <button type="button" onClick={toogleMobNav} className="navbar__button">
            <img alt="menu" src={menuBtn} />
          </button>
        </div>
        <NavLink user={isLoggedIn} />
      </nav>
    </Popup>
  );
}

function ClosedNav(props) {
  const { menuBtn, toogleMobNav } = props;
  return (
    <nav className="navbar">
      <div className="navbar__top">
        <a href="/" className="navbar__title">NewsExplorer</a>
        <button type="button" onClick={toogleMobNav} className="navbar__button">
          <img alt="menu" src={menuBtn} />
        </button>
      </div>
    </nav>
  );
}

function MobileNav(props) {
  const { isOpen, toogleMobNav, isLoggedIn } = props;
  const menuBtn = isOpen ? closebtn : openbtn;
  return (
    <>
      {
        isOpen ? (
          <OpenNav
            isLoggedIn={isLoggedIn}
            toogleMobNav={toogleMobNav}
            menuBtn={menuBtn}
          />
        )
          : (
            <ClosedNav
              toogleMobNav={toogleMobNav}
              menuBtn={menuBtn}
            />
          )
      }
    </>
  );
}

function Navigation(props) {
  const { isLoggedIn } = props;
  const btntext = isLoggedIn ? 'userName' : 'Sign in';

  return (
    <nav className="navbar">
      <div className="navbar__top">
        <a href="/" className="navbar__title">NewsExplorer</a>
        <ul className="navbar__links-container">
          <li className="navbar-border-bottom">
            <a href="/" className="navbar__linkhome">Home </a>
          </li>
          {isLoggedIn && (
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
      </div>

    </nav>
  );
}

export { MobileNav, Navigation };
