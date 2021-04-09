import React, { useEffect, useState } from 'react';
import './search-results.css';

import NewsCard from '../newsCard/NewsCard';

function SearchResults(props) {
  const {
    articles,
    isMain,
    device,
    knownUser,
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
  }, []);

  return (
    <>
      {isMain && (
        <section className="searchpage">
          <h1 className="searchpage__heading"> Search results</h1>
          <ul className="search-results">

            {
              articlesShowing.map((card) => (
                <NewsCard
                  isLoggedIn={knownUser}
                  isDesktop={isDesktop}
                  mainpage
                  oneArticle={card}
                  key={card.link}
                />
              ))
            }
          </ul>
          {showbutton && (
            <button className="searchpage__showmore" type="button" onClick={handleShowMoreArticles}> Show More</button>
          )}
        </section>
      )}
      {!isMain && (
        <ul className="search-results search-results-saved">
          {
            articles.map((card) => (
              <NewsCard
                isLoggedIn={knownUser}
                isDesktop={isDesktop}
                mainpage={false}
                oneArticle={card}
                key={card.link}
              />
            ))
          }
        </ul>
      )}
    </>
  );
}
export default SearchResults;
