import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  const content = (
    <Route
      render={({ location }) => {
        return (
          <Switch location={location}>
            <Route exact path="/" component={Main} />
            <Redirect to="/" />
          </Switch>
        );
      }}
    />
  );

  return <div>{content}</div>;
}

export default App;
