import React, { useState } from 'react';

import './SearchForm.css';

function SearchForm(props) {
  const [search, setSearch] = useState('');

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log(search);
    props.handleSearch(search);
  /*   props.setLoading(); */
  };

  return (
    <section className="search">
      <div className="search__heading">
        <h2 className="search__title">What&#39;s going on in the world? </h2>
        <p className="search__sub"> Find the latest news on any topic and save them in your personal account.</p>
      </div>

      <form className="search__form">
        <input onChange={handleSearchInput} className="search__field" type="search" />
        <button className="search__btn" onClick={handleSearchClick} type="submit"> Search </button>
      </form>

    </section>

  );
}
export default SearchForm;
