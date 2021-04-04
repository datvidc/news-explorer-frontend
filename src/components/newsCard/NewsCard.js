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
    <li className="newscard">
      <article className="newscard__article">
        <img className="newscard__img" alt={title} src={image} />
        <div className="newscard__articlebottom">
          <p className="newscard__date">
            {date}
          </p>
          <h4 className="newscard__heading">
            {keyword}
          </h4>
          <p className="newscard__text">
            {text}
          </p>

          <h4 className="newscard__source">{source}</h4>
        </div>
      </article>
    </li>
  );
}
export default NewsCard;
