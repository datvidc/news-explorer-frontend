import React from 'react';

import './Footer.css';
import github from '../../images/github.png';
import Linkedin from '../../images/Linkedin2.png';

function Footer() {
  return (
    <section className="footer">
      <p className="footer__copytext"> © 2020 No/Mad, Powered by News API</p>
      <nav>
        <ul className="footer__list">
          <li className="footer_listItem">
            <a href="/"> Home </a>
          </li>
          <li className="footer_listItem">
            <a href="https://practicum.yandex.com/web/"> Practicum by Yandex </a>
          </li>
          <li className="footer_listItem">
            <a href="https://github.com/datvidc">
              <img className="footer__img" src={github} alt="github" />
            </a>
          </li>
          <li className="footer_listItem">
            <a href="https://www.linkedin.com/in/dacpo/">
              <img className="footer__img" src={Linkedin} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
export default Footer;
