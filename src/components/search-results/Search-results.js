import React from 'react';
import './search-results.css';

import NewsCard from '../newsCard/NewsCard';

function SearchResults(props) {
  const { articles } = props;
  console.log(typeof articles);
  return (
    <section className="search">
      <h1> Hello SearchResults</h1>
      <ul className="search-results">
        {articles.map((card) => (
          <NewsCard
            oneArticle={card}
          />
        ))}
      </ul>

    </section>

  );
}
export default SearchResults;
