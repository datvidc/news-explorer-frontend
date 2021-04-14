import React, { useEffect, useState, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Main from '../main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SearchResults from '../search-results/Search-results';
import About from '../about/About';
import Footer from '../footer/Footer';
import { MobileNav } from '../navbars/Navbars';
import Popup from '../popup/Popup';
import Signin from '../signin/Signin';
import api from '../../utils/MainApi';
import savedNews from '../saved-news/saved-news';

import CurrentUserContext from '../../context/CurrentUserContext';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [ApiToken, setToken] = useState('');
  const [Articles, SetArticles] = useState([]);
  const [Loggedin, SetLoggedIn] = useState(false); /* use for testing */
  const [UserWindow, SetUserWindow] = useState('');
  const [mobileMenu, SetMobileMenu] = useState(false);
  const [signIn, setSigning] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [sucesspop, setSuccess] = useState(false);
  const [apiError, setapiError] = useState(false);
  const [apiErrMsg, setApiErrMsg] = useState('');

  const ProviderValue = useMemo(() => (
    { currentUser, setCurrentUser }), [currentUser, setCurrentUser]);

  const handleLogin = () => {
    SetLoggedIn(true);
  };

  const handleLogout = () => {
    SetLoggedIn(false);
    setCurrentUser(null);
    setToken('');
    localStorage.removeItem('jwt');
  };

  const changePopupType = () => {
    setSigning(!signIn);
    setSignUp(!signUp);
    setSuccess(false);
  };
  const toggleMobileMenu = () => {
    SetMobileMenu(!mobileMenu);
  };

  const toggleSigninPopup = () => {
    setSigning(!signIn);
    setSuccess(false);
  };

  const toggleSignUpPopup = () => {
    setSignUp(!signUp);
  };

  const HandleApiError = (errMsg) => {
    console.log(errMsg);
    setapiError(true);
    setApiErrMsg(errMsg);
  };

  const HandleToken = (token) => {
    api.getCurrentUser(token)
      .then((res) => {
        console.log(res);
        if (res.data) {
          console.log(res);
          setCurrentUser(res);
          setToken(token);
          handleLogin();
          console.log(token);
          localStorage.setItem('jwt', token);
        }
      })
      .catch((err) => {
        console.log(err);
        HandleApiError(err);
      });
  };

  const handleSignIn = (email, password) => {
    api.signIn(email, password)
      .then((res) => {
        console.log(res);
        if (res.message) {
          throw new Error(res.message);
        }
        if (res.token) {
          console.log(res.token);
          HandleToken(res.token);
        }
      })
      .catch((err) => {
        console.log(err);
        HandleApiError(err);
      });
  };

  const handlesignup = (email, pass, username) => {
    // magic
    api.signup(email, pass, username);
  };
  const handleSuccessclose = () => {
    setSuccess(false);
  };
  const HandleErrorClose = () => {
    setapiError(false);
    setApiErrMsg('');
  };

  useEffect(() => {
    const userDevice = window.screen.width;
    if (userDevice) {
      if (userDevice <= 500) {
        SetUserWindow('mobile');
      } else if (userDevice <= 768) {
        SetUserWindow('tablet');
      } else if (userDevice > 768) {
        SetUserWindow('desktop');
      }
    }
    // tokens
    const token = localStorage.getItem('jwt');
    if (token) {
      HandleToken(token);
    }
    // saved news searches
    const news = localStorage.getItem('news');
    if (news) {
      SetArticles(news); // delete after review. Dont like this functionality
    }
  }, []);

  return (
    <main className="app">
      <CurrentUserContext.Provider value={ProviderValue}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Main
                signmeup={toggleSigninPopup}
                handleLogout={handleLogout}
                device={UserWindow}
                knownUser={Loggedin}
                mainPage
                articleResults={Articles}
                userInfo={currentUser}
                toogleMobNav={toggleMobileMenu}
              />
              {Articles.length > 0 && (
                <SearchResults
                  articles={Articles}
                  isMain
                  device={UserWindow}
                  knownUser={Loggedin}
                />
              )}
              {/* The above will be search results */}
              <About />
            </Route>
            <ProtectedRoute
              path="/saved-news"
              loggedIn={Loggedin}
              component={savedNews}
              mainPage={false}
              handleLogout={handleLogout}
              device={UserWindow}
              knownUser={Loggedin}
              articleResults={Articles}
              userInfo={currentUser}
              toogleMobNav={toggleMobileMenu}
              articles={Articles}
              isMain={false}
            />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
        <Footer />
        {mobileMenu && (
          <MobileNav
            handleLogout={handleLogout}
            handleSignin={toggleSigninPopup}
            isOpen={mobileMenu}
            toogleMobNav={toggleMobileMenu}
            isLoggedIn={Loggedin}
          />
        )}
        {signIn && (
          <Popup closepop={toggleSigninPopup}>
            <Signin
              signin
              handleSignIn={handleSignIn}
              handlesignup={handlesignup}
              changeType={changePopupType}
              closepop={toggleSigninPopup}
            />
          </Popup>
        )}
        {signUp && (
          <Popup closepop={toggleSignUpPopup}>
            <Signin
              signin={false}
              handlesignup={handlesignup}
              handleSignIn={handleSignIn}
              changeType={changePopupType}
              closepop={toggleSignUpPopup}
            />
          </Popup>
        )}
        {sucesspop && (
          <Popup onclose={handleSuccessclose}>
            <div className="signin">
              <button type="button" aria-label="close" className="signin__close" onClick={handleSuccessclose} />
              <h3 className="signin__yes">Registration successfully completed!</h3>
              <button onClick={toggleSigninPopup} className="signin__sucess" type="button">Sign in</button>
            </div>
          </Popup>
        )}
        {apiError && (
          <Popup onclose={HandleErrorClose}>
            <div className="signin">
              <button type="button" aria-label="close" className="signin__close" onClick={HandleErrorClose} />
              <h3 className="signin__yes"> Oops, something went wrong, please try again later</h3>
              <p> {apiErrMsg.message} </p>
            </div>
          </Popup>
        )}
      </CurrentUserContext.Provider>
    </main>
  );
};
export default App;
