import React from 'react';

import NavLink from '../nav-link/nav-link';
import Popup from '../popup/Popup';
import openbtn from '../../images/menu.png';
import closebtn from '../../images/close.png';
import './Navbars.css';
import logOut from '../../images/logout.png';
import blckMenuBtn from '../../images/menuBlack.png';
import logoutBlack from '../../images/logoutBlack.png';
import currentUserContext from '../../context/CurrentUserContext';

function OpenNav(props) {
  const {
    toogleMobNav,
    menuBtn,
    isLoggedIn,
    handleLog,
    handleSignin,
  } = props;
  const { currentUser } = React.useContext(currentUserContext);
  console.log(currentUser);
  const logUserOut = (e) => {
    e.preventDefault();
    handleLog();
  };

  return (
    <Popup>
      <nav className="navbar navbar-active">
        <div className="navbar__top">
          <a href="/" className="navbar__title">NewsExplorer</a>
          <button type="button" onClick={toogleMobNav} className="navbar__button">
            <img alt="menu" src={menuBtn} />
          </button>
        </div>
        <NavLink
          handleSignin={handleSignin}
          handleLogout={logUserOut}
          user={isLoggedIn}
        />
      </nav>
    </Popup>
  );
}

function ClosedNav(props) {
  const { menuBtn, toogleMobNav, isMain } = props;
  const MenuButton = isMain ? menuBtn : blckMenuBtn;
  const titleClass = isMain ? 'navbar__title' : 'navbar__title-saved';

  return (
    <nav className="navbar">
      <div className="navbar__top">
        <a href="/" className={titleClass}>NewsExplorer</a>
        <button type="button" onClick={toogleMobNav} className="navbar__button">
          <img alt="menu" src={MenuButton} />
        </button>
      </div>
    </nav>
  );
}

function MobileNav(props) {
  const {
    isOpen,
    toogleMobNav,
    isLoggedIn,
    handleLogout,
    handleSignin,
    isMain,
  } = props;
  const menuBtn = isOpen ? closebtn : openbtn;
  return (
    <>
      {
        isOpen ? (
          <OpenNav
            handleSignin={handleSignin}
            isMain={isMain}
            handleLog={handleLogout}
            isLoggedIn={isLoggedIn}
            toogleMobNav={toogleMobNav}
            menuBtn={menuBtn}
          />
        )
          : (
            <ClosedNav
              isMain={isMain}
              toogleMobNav={toogleMobNav}
              menuBtn={menuBtn}
            />
          )
      }
    </>
  );
}

function Navigation(props) {
  const {
    isLoggedIn,
    handleLogout,
    isMain,
    handleSignin,
  } = props;

  const { currentUser } = React.useContext(currentUserContext);

  const btntext = isLoggedIn ? currentUser.data.name : 'Sign in';
  const clickHandler = isLoggedIn ? handleLogout : handleSignin;

  return (
    <>
      {isMain && (
        <nav className="navbar">
          <div className="navbar__top">
            <a href="/" className="navbar__title">NewsExplorer</a>
            <ul className="navbar__links-container">
              <li className="navbar-border-bottom navbar__linkItem">
                <a href="/" className="navbar__linkhome">Home </a>
              </li>
              {isLoggedIn && (
                <>
                  <li className="navbar__linkItem">
                    <a className="navbar__linkSaved navbar__linkhome" href="/saved-news">Saved Articles</a>
                  </li>
                </>
              )}
              <li>
                <button type="button" onClick={clickHandler} className="navbar__linkUser">
                  {btntext}
                  {isLoggedIn && (<img src={logOut} alt="Log Out" />)}
                </button>
              </li>
            </ul>
          </div>

        </nav>
      )}
      {!isMain && (
        <nav className="navbar">
          <div className="navbar__top-saved">
            <a href="/" className="navbar__title-saved">NewsExplorer</a>
            <ul className="navbar__links-container">
              <li className="navbar__linkItem">
                <a href="/" className="navbar__linkhome-saved">Home </a>
              </li>
              {isLoggedIn && (
                <>
                  <li className="navbar-border-bottom-saved navbar__linkItem-saved">
                    <a className="navbar__linkSaved navbar__linkhome-saved" href="/saved-news">Saved Articles</a>
                  </li>
                </>
              )}
              <li>
                <button type="button" onClick={clickHandler} className="navbar__linkUser-saved">
                  {btntext}
                  {isLoggedIn && (<img src={logoutBlack} alt="Log Out" />)}
                </button>
              </li>
            </ul>
          </div>

        </nav>
      )}
    </>
  );
}

export { MobileNav, Navigation };
