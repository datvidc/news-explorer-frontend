import React from 'react';

import Main from '../main/Main';
import SearchResults from '../search-results/Search-results';

function savedNews(props) {
  const {
    mainPage,
    handleLogout,
    device,
    knownUser,
    articleResults,
    userInfo,
    toogleMobNav,
    articles,
    isMain,
  } = props;
  console.log(articles);
  return (
    <>
      <Main
        mainPage={mainPage}
        handleLogout={handleLogout}
        device={device}
        knownUser={knownUser}
        articleResults={articleResults}
        userInfo={userInfo}
        toogleMobNav={toogleMobNav}
        articles={articles}
      />
      { articles.length > 0 && (
        <SearchResults
          articles={articles}
          isMain={isMain}
          device={device}
          knownUser={knownUser}
        />
      )}
    </>
  );
}

export default savedNews;
