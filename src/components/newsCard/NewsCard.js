import React from 'react';

import './NewsCard.css';

function NewsCard(props) {
  const {
    oneArticle,
    mainpage,
    isLoggedIn,
  } = props;

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

        {mainpage && (

          <button type="button" aria-label="Bookmark this newsarticle" onClick={handleBookmarkClick} className={bookmark} />
        )}
        {!isLoggedIn && mainpage && (
          <p className="newscard__prompt"> Sign in to save articles </p>
        )}

        {!mainpage && (
          <div className="newscard__buttons">
            <p className="newscard__keyword">
              {keyword}
            </p>
            <button type="button" aria-label="remove" className="newscard__button newscard__trash" />
            <p className="newscard__rusure"> Remove from saved </p>
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
