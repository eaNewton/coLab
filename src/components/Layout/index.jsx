import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = props => {
  const { className, children } = props;
  return (
    <div className={`layout ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
