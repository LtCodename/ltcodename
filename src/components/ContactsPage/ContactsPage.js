import React from 'react';
import './ContactsPage.css';
import NavigationPanel from '../NavigationPanel/NavigationPanel';
import Footer from '../Footer/Footer';

function ContactsPage() {
  const content = (
    <div className="content-wrapper flex-one column column-v column-h">Contacts</div>
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

export default ContactsPage;
