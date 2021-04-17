import React, { useEffect, useState } from 'react';
import './search-results.css';

import NewsCard from '../newsCard/NewsCard';

function SearchResults(props) {
  const {
    articles,
    isMain,
    device,
    knownUser,
    signmeup,
    token,
    keyword: kword,
    isbookmarked,
    saveArticle,
  } = props;

  const [next, Setnext] = useState(3);
  const [articlesShowing, setArticlesShowing] = useState([]);
  const [showbutton, setshowbutton] = useState(true);
  const isDesktop = device === 'desktop';

  const handleShowMoreArticles = () => {
    if (next >= articles.length) {
      Setnext(articles.length);
      setshowbutton(false);
    } else {
      Setnext(next + 3);
    }
    setArticlesShowing(articles.slice(0, next));
  };

  useEffect(() => {
    setArticlesShowing(articles.slice(0, 3));
  }, [articles]);

  return (
    <>
      {isMain && (
        <section className="searchpage">
          <h1 className="searchpage__heading"> Search results</h1>
          <div className="search-results">
            {
              articlesShowing.map((card) => (
                <NewsCard
                  saveArticle={saveArticle}
                  savedList={isbookmarked}
                  isSaved
                  kword={kword}
                  token={token}
                  signmeup={signmeup}
                  isLoggedIn={knownUser}
                  isDesktop={isDesktop}
                  mainpage
                  oneArticle={card}
                  key={card.url}
                />
              ))
            }
          </div>
          {showbutton && (
            <button className="searchpage__showmore" type="button" onClick={handleShowMoreArticles}> Show More</button>
          )}
        </section>
      )}
      {!isMain && (
        <section className="searchpage">
          <div className="search-results">
            {articles && (
              articles.map((card) => (
                <NewsCard
                  articles={articles}
                  token={token}
                  isLoggedIn={knownUser}
                  isDesktop={isDesktop}
                  mainpage={false}
                  oneArticle={card}
                  key={card.url}
                  kword={kword}
                  savedList={isbookmarked}
                />
              )))}
            {!articles && (
              <h3 className="searchpage__heading"> Nothing saved</h3>
            )}
          </div>
        </section>
      )}
    </>
  );
}
export default SearchResults;
