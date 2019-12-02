import React from "react";
import MenuItem from "../../components/Menu/Item";

const Menu = ({ menuId }) => {
  return (
    <ul className="menu" id={menuId}>
      <MenuItem />
    </ul>
  );
};

export default Menu;
