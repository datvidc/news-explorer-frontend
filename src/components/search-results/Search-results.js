import React, { useEffect, useState } from 'react';
import './search-results.css';

import { RESULTNUM } from '../../utils/secret/secret.json';
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
    deleteArticle,
    savedArticleList,
  } = props;

  const [next, Setnext] = useState(RESULTNUM);
  const [articlesShowing, setArticlesShowing] = useState([]);
  const [showbutton, setshowbutton] = useState(true);
  const isDesktop = device === 'desktop';
  const start = 0;

  const handleShowMoreArticles = () => {
    if (next >= articles.length) {
      Setnext(articles.length);
      setshowbutton(false);
    } else {
      Setnext(next + RESULTNUM);
    }
    setArticlesShowing(articles.slice(start, next));
  };

  useEffect(() => {
    setArticlesShowing(articles.slice(start, RESULTNUM));
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
                  savedArticleList={savedArticleList}
                  deleteArticle={deleteArticle}
                  saveArticle={saveArticle}
                  savedList={isbookmarked}
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
                  savedArticleList={savedArticleList}
                  deleteArticle={deleteArticle}
                  saveArticle={saveArticle}
                  articles={articles}
                  token={token}
                  isLoggedIn={knownUser}
                  isDesktop={isDesktop}
                  mainpage={false}
                  oneArticle={card}
                  key={card.link}
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
