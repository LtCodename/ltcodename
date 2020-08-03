import React from 'react';
import './HomePage.css';
import NavigationPanel from '../NavigationPanel/NavigationPanel';
import Footer from '../Footer/Footer';

function HomePage() {
  const content = (
    <div className="content-wrapper flex-one column column-v column-h">Home</div>
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

export default HomePage;
