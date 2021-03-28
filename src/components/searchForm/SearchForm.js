import React from 'react';

import './SearchForm.css';

function SearchForm() {
  /* const {} = props; */
  return (

    <section className="search">
      <div className="search__heading">
        <h2>What&#39;s going on in the world? </h2>
        <p> Find the latest news on any topic and save them in your personal account.</p>
      </div>

      <form className="search__form">
        <input className="search__field" type="search" />
        <button className="search__btn" type="submit"> Search </button>
      </form>

    </section>

  );
}
export default SearchForm;
