import React from 'react';
import './preloader.css';

function Preloader(props) {
  const { isEmpty, isLoading } = props;

  return (
    <div className="preloader__main">
      { isLoading && (
        <>
          <i className="circle-preloader" />
          <p className="preloader__text">Searching for news...</p>
        </>

      )}
      { (isEmpty && !isLoading) && (
        <>
          <h3 className="preloader__heading"> Nothing found</h3>
          <p className="preloader__text"> Sorry, but nothing matched your search terms.</p>
        </>
      )}
    </div>
  );
}

export default Preloader;
