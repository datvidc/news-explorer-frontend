import React, { useEffect } from 'react';

import './Popup.css';

function Popup(props) {
  const { component, children, close } = props;

  useEffect(() => {
    const closeModal = (event) => {
      if (event.keyCode === 27) {
        close();
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, []);

  return (
    <section className="popup">
      {component}
      {children}
    </section>

  );
}
export default Popup;
