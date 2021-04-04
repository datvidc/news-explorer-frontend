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
import { MobileNav } from '../navbars/Navbars';

import CurrentUserContext from '../../context/CurrentUserContext';

const App = () => {
  const [currentUser, SetCurrentUser] = useState({
    data: {
      id: '60540ceed1ccba35d1986789',
      name: 'me',
      email: 'd@vidc.dk',
    },
  });

  const articleList = {
    status: 'ok',
    totalResults: 2,
    articles: [
      {
        _id: '60666432161cbb48f32c2d1c',
        keyword: 'yay',
        title: 'Yay is yay',
        text: 'yay is text',
        date: 'Monday',
        source: 'http://www.website.is',
        link: 'http://www.website.com',
        image: 'https://techcrunch.com/wp-content/uploads/2021/03/nbrhd-reef-cartken.jpg?w=600',
        owner: '60540ceed1ccba35d1986789',
        createdAt: '2021-04-02T00:24:18.426Z',
      },
      {
        _id: '60666432161cbb48f32c2d1c',
        keyword: 'yay',
        title: 'Yay is yay',
        text: 'yay is text',
        date: 'Monday',
        source: 'http://www.website.is',
        link: 'http://www.website.com',
        image: 'https://techcrunch.com/wp-content/uploads/2021/03/nbrhd-reef-cartken.jpg?w=600',
        owner: '60540ceed1ccba35d1986789',
        createdAt: '2021-04-02T00:24:18.426Z',
      },
    ],
  };
  const [Articles, SetArticles] = useState(articleList);
  const [Loggedin, SetLoggedIn] = useState(true);
  const [UserWindow, SetUserWindow] = useState('');
  const [mobileMenu, SetMobileMenu] = useState(false);

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    SetMobileMenu(!mobileMenu);
  };

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

  console.log(Articles.articles);
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
                articleResults={Articles}
                userInfo={currentUser}
                toogleMobNav={toggleMobileMenu}
              />
              {Articles && <SearchResults articles={articleList.articles} />}
              <About />
            </Route>

            <Route exact path="/saved-news">
              <Main
                mainpage={false}
              />
            </Route>
          </Switch>
          <Redirect from="*" to="/" />
        </Router>
        <Footer />
        {mobileMenu && (
          <MobileNav
            isOpen={mobileMenu}
            toogleMobNav={toggleMobileMenu}
            isLoggedIn={Loggedin}
          />
        )}
      </main>
    </CurrentUserContext.Provider>

  );
};
export default App;
