import React from 'react';
import Main from '../main/Main';
import SearchResults from '../search-results/Search-results';

function SavedNews(props) {
  const {
    saveArticle,
    mainPage,
    handleLogout,
    device,
    knownUser,
    articleResults,
    userInfo,
    toogleMobNav,
    articles,
    isMain,
    token,
    keyword,
    bookmarked,
  } = props;

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
          saveArticle={saveArticle}
          isbookmarked={bookmarked}
          token={token}
          keyword={keyword}
          articles={articleResults}
          isMain={isMain}
          device={device}
          knownUser={knownUser}
        />
      )}
    </>
  );
}

export default SavedNews;
