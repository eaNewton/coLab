import React, { PureComponent } from "react";
import Menu from "../../components/Menu";

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <div className="footer-container mobile-menu-wrapper">
          <Menu menuId="" />
        </div>
      </footer>
    );
  }
}

export default Footer;
