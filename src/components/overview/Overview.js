import React from 'react';

import './Overview.css';
import currentUserContext from '../../context/CurrentUserContext';

function Overview() {
  const user = React.useContext(currentUserContext);

  // usecontext with saved articles
  const artikelnums = 5;

  // Logic for saving keywords here

  const keywords = ['list', 'list', 'meyer', 'hello', 'french', 'react'];
  const ukeywords = keywords.sort().filter((x, i, a) => !i || x !== a[i - 1]);
  console.log(ukeywords[1]);

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

  return (
    <section className="overview">

      { artikelnums && (
        <>
          <p className="overview__title">Saved articles </p>
          <h1 className="overview__heading">
            Hello {user.data.name}, you have {artikelnums} saved articles
          </h1>
          <p className="overview__text">By Keywords <span className="overview__keywords"> {keywordslist()} </span> </p>
        </>
      )}

    </section>
  );
}

export default Overview;
