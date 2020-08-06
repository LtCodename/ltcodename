import React from 'react';
import './PortfolioPage.css';
import { ArrowIcon } from './../../icons';
import { NavLink } from 'react-router-dom';

function PortfolioPage() {
  const content = (
    <div className="content-wrapper flex-one column column-v column-h">
      <div className="row row-between row-h contacts-wrapper">
        <div className="column column-v">
          <NavLink to="/" className="arrow-icon-wrapper">{ArrowIcon}</NavLink>
        </div>
        <div className="column intro-wrapper column-h">
          <span className="intro-text">Check out my projects.</span>
        </div>
        <div className="void"></div>
      </div>
    </div>
  );

  return (
    <div className="column outer-wrapper flex-one">
      {content}
    </div>
  );
}

export default PortfolioPage;
