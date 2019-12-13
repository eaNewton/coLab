import React, { useContext } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ThemeContext from "../../context/ThemeContext";

const Layout = props => {
  const { className, children } = props;
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`layout ${className} ${dark ? "dark" : "light"}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
