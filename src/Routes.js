import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import TrackableRoute from "./components/Route/TrackableRoute";
import App from "./containers/App";

const Routes = ({ routeProps }) => {
  return (
    <Router>
      <App>
        <Switch>
          <TrackableRoute />
        </Switch>
      </App>
    </Router>
  );
};

export default Routes;
