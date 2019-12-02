import React from "react";
import PropTypes from "prop-types";

const App = ({ children }) => {
  return <div className="layout-wrapper">{children}</div>;
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
