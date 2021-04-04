import React from 'react';

import './NewsCard.css';

function NewsCard(props) {
  const { oneArticle } = props;

  const {
    keyword,
    title,
    date,
    source,
    image,
    text,
  } = oneArticle;

  console.log(oneArticle);

  return (
    <li>

      <img alt={title} src={image} />
      <div>
        <p>
          {date}
        </p>
        <h4>
          {keyword}
        </h4>
        <p>
          {text}
        </p>

        <h4>{source}</h4>
      </div>
    </li>
  );
}
export default NewsCard;
