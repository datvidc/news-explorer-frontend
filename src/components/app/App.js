import React, { useEffect, useState } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Main from '../main/Main';
import Preloader from '../preloader/preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SearchResults from '../search-results/Search-results';
import About from '../about/About';
import Footer from '../footer/Footer';
import { MobileNav } from '../navbars/Navbars';
import Popup from '../popup/Popup';
import Signin from '../signin/Signin';
import api from '../../utils/MainApi';
import newsapi from '../../utils/NewsApi';

import SavedNews from '../saved-news/saved-news';

import CurrentUserContext from '../../context/CurrentUserContext';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
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
  const [loading, setLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [newsSearch, setnewsSearch] = useState('');
  const [bookmarked, setbookmarked] = useState([]);

  const handleLogin = () => {
    SetLoggedIn(true);
  };

  const HandleApiError = (errMsg) => {
    setapiError(true);
    setApiErrMsg(errMsg);
  };

  const handleSearch = (input) => {
    setLoading(true);
    setnewsSearch(input);
    localStorage.setItem('keyword', input);
    newsapi.getArticles(input)
      .then((res) => {
        SetArticles(res.articles);
        localStorage.setItem('news', JSON.stringify(res.articles));
        setLoading(false);
      })
      .catch((err) => {
        HandleApiError(err);
        setLoading(false);
      });
  };

  const saveBookmarkedArticles = (obj) => {
    const newObj = obj.map((element) => element.link);
    setbookmarked(newObj);
  };

  const handleSavedArticles = (token) => {
    api.getSavedArticles(token)
      .then((res) => {
        setSavedArticles(res);
        saveBookmarkedArticles(res);
      });
  };

  const SaveAnArticle = (token, article2Save) => {
    api.saveAnArticle(token, article2Save)
      .then(() => {
        const newSavedArticles = savedArticles.concat(article2Save);
        setSavedArticles(newSavedArticles);
      })
      .catch((err) => {
        throw new Error(`${err.status} : ${err.message}`);
      });
  };

  const deleteAnArticle = (token, id) => {
    api.deleteAnArticle(token, id)
      .then((res) => {
        if (res) {
          const newSavedArticles = savedArticles.filter((article) => article._id !== res._id);
          setSavedArticles(newSavedArticles);
        }
      })
      .catch((err) => {
        HandleApiError(err);
      });
  };

  const setUser = (info, token) => {
    setCurrentUser({
      data:
        { email: info.data.email, name: info.data.name, _id: info.data._id },
    });
    setToken(token);
    handleLogin();
    localStorage.setItem('jwt', token);
    handleSavedArticles(token);
  };

  const HandleToken = (token) => {
    api.getCurrentUser(token)
      .then((res) => {
        if (res.data) {
          setUser(res, token);
        }
      })
      .catch((err) => {
        HandleApiError(err);
      });
  };

  const handleSignIn = (email, password) => {
    api.signIn(email, password)
      .then((res) => {
        if (res.message) {
          throw new Error(res.message);
        }
        if (res.token) {
          HandleToken(res.token);
        }
      })
      .catch((err) => {
        HandleApiError(err);
      });
  };

  const handlesignup = (email, pass, username) => {
    // magic
    api.signup(email, pass, username)
      .then(() => {
        handleSignIn(email, pass);
      })
      .catch((err) => {
        HandleApiError(err);
      });
  };

  const handleLoading = () => {
    setLoading(!loading);
  };

  const handleLogout = () => {
    SetLoggedIn(false);
    setCurrentUser(null);
    setToken('');
    localStorage.removeItem('jwt');
    setbookmarked([]);
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
    const news = JSON.parse(localStorage.getItem('news'));
    if (news) {
      SetArticles(news); // delete after review. Dont like this functionality
    }
    // keyword saved
    const kword = localStorage.getItem('keyword');
    if (kword) {
      setnewsSearch(kword);
    }
  }, []);

  return (
    <main className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main
              handleSearch={handleSearch}
              setLoading={handleLoading}
              signmeup={toggleSigninPopup}
              handleLogout={handleLogout}
              device={UserWindow}
              knownUser={Loggedin}
              mainPage
              articleResults={Articles}
              userInfo={currentUser}
              toogleMobNav={toggleMobileMenu}
              searchInput={handleSearch}
            />
            {loading && (
              <Preloader />
            )}
            {Articles.length > 0 && (
              <SearchResults
                savedArticleList={savedArticles}
                deleteArticle={deleteAnArticle}
                saveArticle={SaveAnArticle}
                isbookmarked={bookmarked}
                keyword={newsSearch}
                token={ApiToken}
                isLoading={loading}
                setLoading={handleLoading}
                articles={Articles}
                isMain
                device={UserWindow}
                knownUser={Loggedin}
                signmeup={toggleSigninPopup}
              />
            )}
            {/* The above will be search results */}
            <About />
          </Route>
          <CurrentUserContext.Provider value={currentUser}>
            <ProtectedRoute exact path="/saved-news">
              <SavedNews
                deleteArticle={deleteAnArticle}
                saveArticle={SaveAnArticle}
                bookmarked={bookmarked}
                loggedIn={Loggedin}
                mainPage={false}
                handleLogout={handleLogout}
                device={UserWindow}
                knownUser={Loggedin}
                articleResults={savedArticles}
                userInfo={currentUser}
                toogleMobNav={toggleMobileMenu}
                articles={Articles}
                isMain={false}
                token={ApiToken}
                keyword={newsSearch}
              />
            </ProtectedRoute>
          </CurrentUserContext.Provider>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
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
