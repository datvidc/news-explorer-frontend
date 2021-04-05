import React from 'react';

import './NewsCard.css';
import trash from '../../images/trash.png';
import bookmark from '../../images/bookmark.png';

function NewsCard(props) {
  const { oneArticle, mainpage } = props;

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
        <button type="button" className="newscard__button newscard__bookmark">
          <img alt="put in trash" src={bookmark} />
        </button>
        { !mainpage && (
        <button type="button" className="newscard__button">
          <img alt="put in trash" src={trash} />
        </button>
        )}
        <img className="newscard__img" alt={keyword} src={image} />
        <div className="newscard__articlebottom">
          <p className="newscard__date">
            {date}
          </p>
          <h4 className="newscard__heading">
            {title}
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
