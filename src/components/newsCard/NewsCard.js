import React, { useState } from 'react';

import './NewsCard.css';
import defaultImg from '../../images/undefined.jpg';
import api from '../../utils/MainApi';

function NewsCard(props) {
  const {
    oneArticle,
    mainpage,
    isLoggedIn,
    signmeup,
    token,
    kword,
  } = props;
  let { savedList } = props;

  const newArticle = !mainpage ? ({
    keyword: oneArticle.keyword,
    title: oneArticle.title,
    text: oneArticle.text,
    date: new Date(oneArticle.date).toLocaleDateString('en-US', { dateStyle: 'long' }),
    source: oneArticle.source,
    link: oneArticle.link,
    image: oneArticle.image,
  }) : ({
    keyword: kword,
    title: oneArticle.title,
    text: oneArticle.description,
    date: new Date(oneArticle.publishedAt).toLocaleDateString('en-US', { dateStyle: 'long' }),
    source: oneArticle.source.name,
    link: oneArticle.url,
    image: oneArticle.urlToImage,
  });

  const {
    keyword: newKeyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = newArticle;

  const isSaved = savedList.includes(link);
  const [bookmarked, setBookmarked] = useState(isSaved);
  const [imgSrc, setImgSrc] = useState(image);
  const [imgErr, setImgErr] = useState(false);

  const onError = () => {
    if (!imgErr) {
      setImgErr(true);
      setImgSrc(defaultImg);
    }
  };

  // logic for determining if newsArticle is bookmarked

  const bookmark = isSaved ? 'newscard__button newscard__isBookmarked' : 'newscard__button newscard__bookmark';

  const handleBookmarkClick = () => {
    if (!isLoggedIn) {
      signmeup();
    } else {
      api.saveAnArticle(token, newArticle)
        .then(() => {
        })
        .catch((err) => {
          throw new Error(`${err.status} : ${err.message}`);
        });
      setBookmarked(!bookmarked);
    }
  };
  const handleDeleteClick = () => {
    api.deleteAnArticle(token, oneArticle._id)
      .then((res) => {
        savedList = savedList.filter((article) => article._id !== res._id);
      })
      .catch((err) => {
        throw new Error(`${err.status} : ${err.message}`);
      });
  };

  return (
    <article className="newscard newscard__article">

      {mainpage && (

        <button type="button" aria-label="Bookmark this newsarticle" onClick={handleBookmarkClick} className={bookmark} />
      )}
      {!isLoggedIn && mainpage && (
        <p className="newscard__prompt"> Sign in to save articles </p>
      )}

      {!mainpage && (
        <div className="newscard__buttons">
          <p className="newscard__keyword">
            {newKeyword}
          </p>
          <button onClick={handleDeleteClick} type="button" aria-label="remove" className="newscard__button newscard__trash" />
          <p className="newscard__rusure"> Remove from saved </p>
        </div>
      )}
      <img className="newscard__img" alt={newKeyword} src={imgSrc} onError={onError} />
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

        <h4 className="newscard__source"> <a target="_blank" rel="noreferrer" className="newscard__source" href={link}>{source} </a></h4>
      </div>
    </article>
  );
}
export default NewsCard;
