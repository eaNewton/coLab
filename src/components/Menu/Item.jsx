import React from "react";

import { NavLink } from "react-router-dom";

const MenuItem = props => {
  const { itemUrl, itemImgSrc, itemClass, itemTitle } = props;
  return (
    <li>
      <NavLink to={itemUrl} activeClassName="active">
        <div className="menu-item">
          <img alt="" src={itemImgSrc} className={itemClass} />
          {/* itemTitle */}
        </div>
      </NavLink>
    </li>
  );
};

export default MenuItem;
