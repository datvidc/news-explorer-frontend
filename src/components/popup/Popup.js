import React from 'react';

import './Popup.css';

function Popup(props) {
  const { component, children } = props;
  return (
    <section className="popup">
      {component}
      {children}
    </section>

  );
}
export default Popup;
