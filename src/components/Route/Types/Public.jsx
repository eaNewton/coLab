import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

export default class PublicRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    props: PropTypes.object.isRequired,
    exact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired
  };

  renderComponent(props) {
    const { component: C } = this.props;

    return <C {...props} />;
  }

  render() {
    const { exact, path } = this.props;
    return (
      <Route
        exact={exact}
        path={path}
        render={props => this.renderComponent(props)}
      />
    );
  }
}
