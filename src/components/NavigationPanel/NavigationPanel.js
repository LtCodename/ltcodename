import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationPanel.css';

function NavigationPanel() {

  return (
    <div className="row navigation-panel row-h">
        <div className="row links-row">
            <NavLink activeClassName='active-tab' className="tab" to="/">
                {'Home'}
            </NavLink>
            <NavLink activeClassName='active-tab' className="tab" to="/portfolio">
                {'Portfolio'}
            </NavLink>
            <NavLink activeClassName='active-tab' className="tab" to="/contacts">
                {'Contacts'}
            </NavLink>
        </div>
    </div>
  );
}

export default NavigationPanel;
