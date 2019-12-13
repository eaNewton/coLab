import React, { Component } from "react";
import PublicRoute from "./Types/Public";

export default class TrackableRoute extends Component {
  render() {
    const { exact, path, component, props } = this.props;

    return (
      <PublicRoute
        path={path}
        exact={exact}
        component={component}
        props={props}
      />
    );
  }
}
