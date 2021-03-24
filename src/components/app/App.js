import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Main from '../main/Main';

import CurrentUserContext from '../../context/CurrentUserContext';

const App = () => {
  const [SetCurrentUser, currentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <main className="app">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>

            <Route exact path='/saved-news'>

            </Route>
          </Switch>
          <Redirect from='*' to='/' />
        </Router>

      </main>
    </CurrentUserContext.Provider>

  );
};
export default App;
