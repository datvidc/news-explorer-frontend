import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';

/* import { CurrentUserContext } from '../../context/CurrentUserContext'; */

const App = () => {

  const [setCurrentUser, currentUser] = useState({});
  const [setLoggedIn, LoggedIn] = useState(false);

  const [setWinSize, WinSize] = useState('mobile');
  return (
    <CurrentUserContext.Provider value={currentUser}>

      <main className="app">

        <h1> hello world</h1>

      </main>
    </CurrentUserContext.Provider>

  );
};
export default App;
