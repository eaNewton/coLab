import React, { Component } from "react";
import PropTypes from "prop-types";
import { routeTypes } from "constants/routes";
import PublicRoute from "components/Route/Types/Public";
import UnauthenticatedRoute from "components/Route/Types/Unauthenticated";
import AuthenticatedRoute from "components/Route/Types/Authenticated";

export default class TrackableRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    props: PropTypes.object.isRequired,
    exact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.trackURLChange();
  }

  render() {
    const { exact, path, component, props, type } = this.props;
    const { PUBLIC, UNAUTHENTICATED } = routeTypes;

    if (type === PUBLIC) {
      return (
        <PublicRoute
          path={path}
          exact={exact}
          component={component}
          props={props}
        />
      );
    } else if (type === UNAUTHENTICATED) {
      return (
        <UnauthenticatedRoute
          path={path}
          exact={exact}
          component={component}
          props={props}
        />
      );
    }

    return (
      <AuthenticatedRoute
        path={path}
        exact={exact}
        component={component}
        props={props}
      />
    );
  }
}
