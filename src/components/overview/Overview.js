import React from 'react';

import './Overview.css';
import currentUserContext from '../../context/CurrentUserContext';

function Overview(props) {
  const user = React.useContext(currentUserContext);
  console.log(user);

  const { articles } = props;

  // Logic for saving keywords here
  let ListOfKeywords;
  if (articles) {
    const wordsOfKey = articles ? (articles.forEach((news) => {
      wordsOfKey.push(news.keyword);
    })
    ) : ([]);

    const ukeywords = articles.length > 0
      ? (wordsOfKey.sort().filter((x, i, a) => !i || x !== a[i - 1])) : (false);

    const keywordslist = () => {
      switch (ukeywords.length) {
        case (1):
          return `${ukeywords[0]}`;
        case (2):
          return ` ${ukeywords[0]}, ${ukeywords[1]}`;
        case (3):
          return `${ukeywords[0]}, ${ukeywords[1]}, ${ukeywords[2]}`;
        default:
          return `${ukeywords[0]}, ${ukeywords[1]}, and ${ukeywords.length - 2} more`;
      }
    };
    ListOfKeywords = keywordslist();
  } else {
    ListOfKeywords = false;
  }

  return (
    <section className="overview">

      { articles.length > 0 && (
        <>
          <p className="overview__title">Saved articles </p>
          <h1 className="overview__heading">
            Hello {user.data.name}, you have {articles.length} saved articles
          </h1>
          <p className="overview__text">By Keywords <span className="overview__keywords"> { ListOfKeywords } </span> </p>
        </>
      )}
      { articles.length <= 0 && (
        <>
          <p className="overview__title">Saved articles </p>
          <h1 className="overview__heading"> You have no saved Articles</h1>
        </>
      )}

    </section>
  );
}

export default Overview;
