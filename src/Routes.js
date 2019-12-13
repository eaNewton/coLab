import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
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
const AsyncSettingsAccount = AsyncComponentHOC(() =>
  import("./containers/Settings/AccountEdit")
);

const Routes = ({ routeProps }) => {
  return (
    <Router>
      <ThemeProvider>
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
            <TrackableRoute
              path={routeCodes.SETTINGS_ACCOUNT}
              exact
              component={AsyncSettingsAccount}
              props={routeProps}
              type={routeTypes.PUBLIC}
            />
          </Switch>
        </App>
      </ThemeProvider>
    </Router>
  );
};

export default Routes;
