import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import ContactsPage from './components/ContactsPage/ContactsPage';

function App() {
  const content = (
    <div className="column flex-one">
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="scaleDownFromRight"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/portfolio" component={PortfolioPage}/>
                <Route exact path="/contacts" component={ContactsPage}/>
                <Redirect to="/"/>
              </Switch>
            </PageTransition>
          );
        }}
      />
    </div>
  );

  return (
    <div className="column outer-wrapper">
      {content}
    </div>
  );
}

export default App;
