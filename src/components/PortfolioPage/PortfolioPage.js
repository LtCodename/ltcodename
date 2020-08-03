import React from 'react';
import './PortfolioPage.css';

function PortfolioPage() {
  const content = (
    <div className="content-wrapper flex-one column column-v column-h">Portfolio</div>
  );

  return (
    <div className="column outer-wrapper flex-one">
      {content}
    </div>
  );
}

export default PortfolioPage;
