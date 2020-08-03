import React from 'react';
import './HomePage.css';
import { NavLink } from 'react-router-dom';

function HomePage() {
  const content = (
    <div className="content-wrapper flex-one column column-v column-h">
      <div className="column intro-wrapper column-h">
        <span className="intro-text">Hello, my name is Yevhen Chernenko.</span>
        <span className="intro-text">I am a web developer.</span>
      </div>
      <div className="row row-h">
        <NavLink className="tab" to="/portfolio">
            {'Portfolio'}
        </NavLink>
        <NavLink className="tab" to="/contacts">
            {'Lets talk!'}
        </NavLink>
      </div>
    </div>
  );

  return (
    <div className="column outer-wrapper flex-one">
      {content}
    </div>
  );
}

export default HomePage;
