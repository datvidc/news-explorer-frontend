import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
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

import CurrentUserContext from '../../context/CurrentUserContext';

const App = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [ApiToken, setToken] = useState('');
  const [Articles, SetArticles] = useState();
  const [Loggedin, SetLoggedIn] = useState(false); /* use for testing */
  const [UserWindow, SetUserWindow] = useState('');
  const [mobileMenu, SetMobileMenu] = useState(false);
  const [signIn, setSigning] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [sucesspop, setSuccess] = useState(false);
  const [apiError, setapiError] = useState(false);
  const [apiErrMsg, setApiErrMsg] = useState('');

  const handleLogin = () => {
    SetLoggedIn(true);
    history.push('/');
  };

  const handleLogout = () => {
    SetLoggedIn(false);
    setCurrentUser({});
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
    /* setapiError(true);
    setApiErrMsg(errMsg); */
  };

  const HandleToken = (token) => {
    api.getCurrentUser(token)
      .then((res) => {
        if (res.data) {
          setCurrentUser(res);
          setToken(token);
          handleLogin();
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
        HandleToken(res.token)
          .catch((err) => {
            HandleApiError(err);
          });
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
    handleSignIn('d@vidc.dk', '1111');
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

    const token = localStorage.getItem('jwt');
    if (token) {
      HandleToken(token);
    }

    const news = localStorage.getItem('news');

    if (news) {
      SetArticles(news); // delete after review. Dont like this functionality
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <main className="app">
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
              {Articles && (
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
            <ProtectedRoute path="/" loggedIn={Loggedin}> </ProtectedRoute>

            <Route path="/saved-news">
              {/* This will be a protected route */}
              <Main
                mainPage={false}
                handleLogout={handleLogout}
                device={UserWindow}
                knownUser={Loggedin}
                articleResults={Articles}
                userInfo={currentUser}
                toogleMobNav={toggleMobileMenu}
              />
              <SearchResults
                articles={Articles}
                isMain={false}
                device={UserWindow}
                knownUser={Loggedin}
              />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
        <Footer />
        {mobileMenu && (
          <MobileNav
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
              <p> {apiErrMsg} </p>
            </div>
          </Popup>
        )}

      </main>

    </CurrentUserContext.Provider>

  );
};
export default App;
