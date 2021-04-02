import React from 'react';

import './NewsCard.css';

import bookmark from '../../images/bookmark.png';
import trash from '../../images/trash.png';

function NewsCard(props) {
  const {
    url,
    title,
    date,
    keyword,
    source,
  } = props;

  const { name } = source;


  return (
    <li>
      {
      result ?
      (<button type="button" className="newsCard__bookmark"> <img src={bookmark} /> </button>)
    :
    ( <>
        <button type="button" className="newsCard__searcTerm"> {keyword} </button>
        <button type="button" className="newsCard__trash"> <img src={trash} /> </button>
      </>
    );
    }

      <img alt={title} src={url} />
      <div>
        <p> {date}</p>
        <h4> HEADING OF ARTICLE</h4>
        <p> We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the ..</p>

      <h4>{name}</h4>
      </div>
    </li>
  );
}
export default NewsCard;
