import React from 'react';
import './PortfolioPage.css';
import NavigationPanel from '../NavigationPanel/NavigationPanel';
import Footer from '../Footer/Footer';

function PortfolioPage() {
  const content = (
    <div className="content-wrapper flex-one column column-v column-h">Portfolio</div>
  );

  return (
    <div className="column outer-wrapper">
      <div className="column flex-one">
        <NavigationPanel/>
        {content}
      </div>
      <Footer/>
    </div>
  );
}

export default PortfolioPage;
