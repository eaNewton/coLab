import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Routes from "../../Routes";

const mapStateToProps = state => ({
  auth: state.auth.get("data"),
  user: state.user.get("data"),
  userLoading: state.user.get("loading")
});
const Root = props => {
  const { auth, user, userLoading } = props;
  const routeProps = { auth, user, userLoading };

  return (
    <div className="application">
      <Routes routeProps={routeProps} />
    </div>
  );
};
Root.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  userLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Root);
