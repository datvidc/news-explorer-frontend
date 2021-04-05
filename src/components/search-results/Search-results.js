import React, { useEffect, useState } from 'react';
import './search-results.css';

import NewsCard from '../newsCard/NewsCard';

function SearchResults(props) {
  const { articles } = props;
  console.log(articles);

  const [next, Setnext] = useState(3);
  const [articlesShowing, setArticlesShowing] = useState([]);

  const handleShowMoreArticles = () => {
    setArticlesShowing(articles.slice(0, next));
    Setnext(next + 3);
  };

  useEffect(() => {
    setArticlesShowing(articles.slice(0, 3));
  }, []);

  return (
    <section className="searchpage">
      <h1 className="searchpage__heading"> Search results</h1>
      <ul className="search-results">
        {
          articlesShowing.map((card) => (
            <NewsCard
              mainpage
              oneArticle={card}
              key={card.link}
            />
          ))
        }
        <button type="button" onClick={handleShowMoreArticles}> Show More Articles</button>
      </ul>

    </section>

  );
}
export default SearchResults;
