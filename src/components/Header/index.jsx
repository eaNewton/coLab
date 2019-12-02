import React, { PureComponent } from "react";
import { Menu } from "react-feather";

class Header extends PureComponent {
  render() {
    return (
      <header>
        <div className="desktop-menu-wrapper">
          <div className="grid-container">
            <div className="grid-x clearfix">
              <div className="float-right">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
