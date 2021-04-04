import React from 'react';
import './search-results.css';

import NewsCard from '../newsCard/NewsCard';

function SearchResults(props) {
  const { articles } = props;
  console.log(typeof articles);
  return (
    <>
      <h1> Hello SearchResults</h1>
      {articles.map((card) => (
        <NewsCard
          oneArticle={card}
        />
      ))}
    </>

  );
}
export default SearchResults;
