import React from 'react';

import './About.css';
import david from '../../images/DC-img.png';

function About() {
  return (
    <section className="about">
      <img className="about__img" src={david} alt="About David" />
      <div className="about__text">
        <h1 className="about__title"> About the Developer</h1>
        <p className="about__sub"> My name is David and I have been solving problems in IT for over a decade.</p>
        <p className="about__sub">product problems, Team Problems, people problems, customer problems - All kinds of problems </p>
        <p className="about__sub"> I sometimes use Code to solve problems. </p>
        <p className="about__sub"> maybe someday I can help solve one of your problems</p>
      </div>

    </section>

  );
}
export default About;
