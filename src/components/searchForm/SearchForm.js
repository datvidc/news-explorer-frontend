import React from 'react';

import './SearchForm.css';

function SearchForm() {
  /* const {} = props; */
  return (

    <section className="search">
      <h2>What&#39;s going on in the world? </h2>
      <p> Find the latest news on any topic and save them in your personal account.</p>
      <form>
        <input type="search" />
        <button type="submit"> Search </button>
      </form>

    </section>

  );
}
export default SearchForm;
