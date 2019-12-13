import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AsyncComponentHOC from "./components/HOC/AsyncComponentHOC";
import TrackableRoute from "./components/Route/TrackableRoute";
import routeCodes, { routeTypes } from "./constants/routes";
import App from "./containers/App";

const AsyncHome = AsyncComponentHOC(() => import("./containers/Home"));
const AsyncDashboard = AsyncComponentHOC(() =>
  import("./containers/Dashboard")
);
const AsyncProjects = AsyncComponentHOC(() => import("./containers/Projects"));
const AsyncCreate = AsyncComponentHOC(() => import("./containers/Create"));
const AsyncSettings = AsyncComponentHOC(() => import("./containers/Settings"));

const Routes = ({ routeProps }) => {
  return (
    <Router>
      <App>
        <Switch>
          <TrackableRoute
            path={routeCodes.INDEX}
            exact
            component={AsyncHome}
            props={routeProps}
            type={routeTypes.PUBLIC}
          />
          <TrackableRoute
            path={routeCodes.DASHBOARD}
            exact
            component={AsyncDashboard}
            props={routeProps}
            type={routeTypes.PUBLIC}
          />
          <TrackableRoute
            path={routeCodes.PROJECTS}
            exact
            component={AsyncProjects}
            props={routeProps}
            type={routeTypes.PUBLIC}
          />
          <TrackableRoute
            path={routeCodes.CREATE}
            exact
            component={AsyncCreate}
            props={routeProps}
            type={routeTypes.PUBLIC}
          />
          <TrackableRoute
            path={routeCodes.SETTINGS}
            exact
            component={AsyncSettings}
            props={routeProps}
            type={routeTypes.PUBLIC}
          />
        </Switch>
      </App>
    </Router>
  );
};

export default Routes;
