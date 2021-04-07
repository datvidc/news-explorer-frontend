import React from 'react';

import './NewsCard.css';
import trash from '../../images/trash.png';

function NewsCard(props) {
  const { oneArticle, mainpage, isDesktop, isLoggedIn, } = props;

  const {
    keyword,
    title,
    date,
    source,
    image,
    text,
  } = oneArticle;

  // logic for determining if newsArticle is bookmarked

  let bookmark = props.isbookmarked ? 'newscard__button newscard__isBookmarked' : 'newscard__button newscard__bookmark';

  const handleBookmarkClick = () => {
    // code for changing isbookmarked state
    bookmark = props.isbookmarked ? 'newscard__button newscard__isBookmarked' : 'newscard__button newscard__bookmark';
  };

  console.log(oneArticle);

  return (
    <li className="newscard">
      <article className="newscard__article">
        {!isLoggedIn && (
          <p className="newscard__prompt"> Sign in to save articles </p>
        )}
        {mainpage && (

          <button type="button" aria-label="Bookmark this newsarticle" onClick={handleBookmarkClick} className={bookmark} />
        )}

        {!mainpage && (
          <div className="newscard__buttons">
            <p className="newscard__rusure"> Remove from saved </p>
            <p className="newscard__keyword">
              {keyword}
            </p>
            <button type="button" className="newscard__button newscard__trash">
              <img alt="put in trash" src={trash} />
            </button>
          </div>
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
