import React from 'react';
import './ContactsPage.css';
import { EmailIcon, TwitterIcon, FacebookIcon, ArrowIcon } from './../../icons';
import { NavLink } from 'react-router-dom';

function ContactsPage() {
  const content = (
    <div className="content-wrapper flex-one column column-v column-h">
      <div className="row row-between row-h contacts-wrapper">
        <div className="column column-v">
          <NavLink to="/" className="arrow-icon-wrapper">{ArrowIcon}</NavLink>
        </div>
        <div className="column intro-wrapper column-h">
          <span className="intro-text">Here are come ways you can reach out to me.</span>
          <span className="intro-text">Let's talk!</span>
          <div className="contacts-row row">
            <a href="mailto:chernenko.eu@gmail.com?subject='We would like to hire you!'" rel="noopener noreferrer" target="_blank" className="contact-icon-wrapper">{EmailIcon}</a>
            <a href="https://twitter.com/LtCodename" rel="noopener noreferrer" target="_blank" className="contact-icon-wrapper">{TwitterIcon}</a>
            <a href="https://www.facebook.com/LtCodename/" rel="noopener noreferrer" target="_blank" className="contact-icon-wrapper">{FacebookIcon}</a>
          </div>
          <div className="row row-v location-row location-column row-h">
            <span className="location-text">Kyiv, Ukraine.</span>
            <span className="location-text">Eastern European Summer Time, GMT+3</span>
          </div>
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

export default ContactsPage;
