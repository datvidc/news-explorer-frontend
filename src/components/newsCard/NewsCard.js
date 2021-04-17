/* eslint-disable */
import React, { useEffect, useState } from 'react';

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
    saveArticle,
  } = props;
  let { savedList } = props;

  const newArticle = !mainpage ? ({
    keyword: oneArticle.keyword,
    title: oneArticle.title,
    text: oneArticle.text,
    date: new Date(oneArticle.date).toLocaleDateString('en-US', { dateStyle: 'long' }),
    source: oneArticle.source.name,
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


  const [isbookMarked, setIsBookMarked] = useState('newscard__button newscard__bookmark')
  const [imgSrc, setImgSrc] = useState(image);
  const [imgErr, setImgErr] = useState(false);

  useEffect(() => {
    const isSaved = savedList.includes(newArticle.link);
    if (isSaved) {
      setIsBookMarked('newscard__button newscard__isBookmarked');
    } else {
      setIsBookMarked('newscard__button newscard__bookmark');
    }
  }, []);

  const onError = () => {
    if (!imgErr) {
      setImgErr(true);
      setImgSrc(defaultImg);
    }
  };

  const handleBookmarkClick = () => {
    if (!isLoggedIn) {
      signmeup();
    } else {
      if (isbookMarked === 'newscard__button newscard__bookmark') {
        // if newscard is NOT already bookmarked
        // compare and check its unique arr.some(item => item.a === 'b')
        saveArticle(token, newArticle);
        setIsBookMarked('newscard__button newscard__isBookmarked');
        console.log(isbookMarked)
      } else {
        console.log(isbookMarked);
        // HANDLEdELETE ARTICLE
        setIsBookMarked('newscard__button newscard__bookmark');
      }

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

        <button type="button" aria-label="Bookmark this newsarticle" onClick={handleBookmarkClick} className={isbookMarked} />
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
      <img className="newscard__img" alt={newKeyword} src={image} onError={onError} />
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
