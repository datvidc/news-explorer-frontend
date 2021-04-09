import React from 'react';

import './Footer.css';
import github from '../../images/github.png';
import Linkedin from '../../images/Linkedin2.png';

function Footer() {
  return (
    <section className="footer">
      <p className="footer__copytext"> © 2020 No/Mad, Powered by News API</p>
      <nav className="footer__nav">
        <ul className="footer__links">
          <li className="footer__navilink">
            <a href="/"> Home </a>
          </li>
          <li className="footer__navilink">
            <a href="https://practicum.yandex.com/web/"> Practicum by Yandex </a>
          </li>
        </ul>
        <ul className="footer__linkspro">
          <li className="footer__pro">
            <a href="https://github.com/datvidc">
              <img className="footer__img" src={github} alt="github" />
            </a>
          </li>
          <li className="footer__pro">
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
