import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Main from '../main/Main';
import SearchResults from '../search-results/Search-results';
import About from '../about/About';
import Footer from '../footer/Footer';

import CurrentUserContext from '../../context/CurrentUserContext';

const App = () => {
  const [currentUser, SetCurrentUser] = useState({});
  const [Loggedin, SetLoggedIn] = useState(false);
  const [UserWindow, SetUserWindow] = useState('');

  useEffect(() => {
    const userDevice = window.innerWidth;
    if (userDevice) {
      if (userDevice <= 500) {
        SetUserWindow('mobile');
      } else if (userDevice <= 768) {
        SetUserWindow('tablet');
      } else if (userDevice > 768) {
        SetUserWindow('desktop');
      }
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <main className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Main
                device={UserWindow}
                knownUser={Loggedin}
                mainPage
              />
              { Loggedin && <SearchResults /> }
              <About />
            </Route>

            <Route exact path="/saved-news">
              <Main />
            </Route>
          </Switch>
          <Redirect from="*" to="/" />
        </Router>
        <Footer />
      </main>
    </CurrentUserContext.Provider>

  );
};
export default App;
