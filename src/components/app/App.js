/* eslint-disable */
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
import Popup from '../popup/Popup';
import Signin from '../signin/Signin';

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
        keyword: 'ok',
        title: 'Yay is yay no1',
        text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'Monday',
        source: 'http://www.website.is',
        link: 'http://www.website.com',
        image: 'https://mondrian.mashable.com/2021%252F03%252F19%252F0a%252Ff6d61b7c5df64b469ff49ca039929631.49d2c.jpg%252F1200x630.jpg?signature=DQLKBlXpy-YTv1tQmTOlQTOaPgw=',
        owner: '60540ceed1ccba35d1986789',
        createdAt: '2021-04-02T00:24:18.426Z',
      },
      {
        _id: '60666432161cbb48f32c2d1c',
        keyword: 'yay',
        title: 'Yay is no 2',
        text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'Monday',
        source: 'http://www.website.is',
        link: 'http://www.website.com',
        image: 'https://mondrian.mashable.com/2021%252F03%252F19%252F0a%252Ff6d61b7c5df64b469ff49ca039929631.49d2c.jpg%252F1200x630.jpg?signature=DQLKBlXpy-YTv1tQmTOlQTOaPgw=',
        owner: '60540ceed1ccba35d1986789',
        createdAt: '2021-04-02T00:24:18.426Z',
      },
      {
        _id: '60666432161cbb48f32c2d1c',
        keyword: 'yaasdy',
        title: 'yay is title 3',
        text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'Monday',
        source: 'http://www.website.is',
        link: 'http://www.website.com',
        image: 'https://mondrian.mashable.com/2021%252F03%252F19%252F0a%252Ff6d61b7c5df64b469ff49ca039929631.49d2c.jpg%252F1200x630.jpg?signature=DQLKBlXpy-YTv1tQmTOlQTOaPgw=',
        owner: '60540ceed1ccba35d1986789',
        createdAt: '2021-04-02T00:24:18.426Z',
      },
      {
        _id: '60666432161cbb48f32c2d1c',
        keyword: 'sadasdyay',
        title: 'Yay is yay no 4',
        text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        date: 'Monday',
        source: 'http://www.website.is',
        link: 'http://www.website.com',
        image: 'https://mondrian.mashable.com/2021%252F03%252F19%252F0a%252Ff6d61b7c5df64b469ff49ca039929631.49d2c.jpg%252F1200x630.jpg?signature=DQLKBlXpy-YTv1tQmTOlQTOaPgw=',
        owner: '60540ceed1ccba35d1986789',
        createdAt: '2021-04-02T00:24:18.426Z',
      },
      {
        _id: '60666432161cbb48f32c2d1c',
        keyword: 'yasday',
        title: 'Yay is yay no 5',
        text: 'yay is text',
        date: 'Monday',
        source: 'http://www.website.is',
        link: 'http://www.website.com',
        image: 'https://mondrian.mashable.com/2021%252F03%252F19%252F0a%252Ff6d61b7c5df64b469ff49ca039929631.49d2c.jpg%252F1200x630.jpg?signature=DQLKBlXpy-YTv1tQmTOlQTOaPgw=',
        owner: '60540ceed1ccba35d1986789',
        createdAt: '2021-04-02T00:24:18.426Z',
      },
      {
        _id: '60666432161cbb48f32c2d1c',
        keyword: 'yaqwy',
        title: 'Yay is yay no 6',
        text: 'yay is text',
        date: 'Monday',
        source: 'http://www.website.is',
        link: 'http://www.website.com',
        image: 'https://techcrunch.com/wp-content/uploads/2021/03/Remix-Press.jpg?w=764',
        owner: '60540ceed1ccba35d1986789',
        createdAt: '2021-04-02T00:24:18.426Z',
      },
      {
        _id: '60666432161cbb48f32c2d1c',
        keyword: 'yay',
        title: 'Yay is yay no 7',
        text: 'yay is text',
        date: 'Monday',
        source: 'http://www.website.is',
        link: 'http://www.website.com',
        image: 'https://techcrunch.com/wp-content/uploads/2021/03/Remix-Press.jpg?w=764',
        owner: '60540ceed1ccba35d1986789',
        createdAt: '2021-04-02T00:24:18.426Z',
      },

    ],
  };
  const [Articles, SetArticles] = useState(articleList);
  const [Loggedin, SetLoggedIn] = useState(true); /* use for testing */
  const [UserWindow, SetUserWindow] = useState('');
  const [mobileMenu, SetMobileMenu] = useState(false);
  const [signIn, setSigning] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    SetMobileMenu(!mobileMenu);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    SetCurrentUser();
    SetLoggedIn(false);
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
                  articles={articleList.articles}
                  isMain
                  device={UserWindow}
                  knownUser={Loggedin}
                />
              )}
              {/* The above will be search results */}
              <About />
            </Route>
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
                articles={articleList.articles}
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
            isOpen={mobileMenu}
            toogleMobNav={toggleMobileMenu}
            isLoggedIn={Loggedin}
          />
        )}
        {signIn && (
          <Popup>
            <Signin />
          </Popup>

        )}
      </main>
    </CurrentUserContext.Provider>

  );
};
export default App;
