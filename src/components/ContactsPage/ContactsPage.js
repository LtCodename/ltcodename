import React from 'react';
import './ContactsPage.css';

function ContactsPage() {
  const content = (
    <div className="content-wrapper flex-one column column-v column-h">Contacts</div>
  );

  return (
    <div className="column outer-wrapper flex-one">
      {content}
    </div>
  );
}

export default ContactsPage;
