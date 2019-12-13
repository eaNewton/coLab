import React from "react";
import routeCodes from "../../constants/routes";
import MenuItem from "../../components/Menu/Item";
import homeIcon from "../../assets/img/icons/home.svg";
import dashboardIcon from "../../assets/img/icons/dashboard.svg";
import projectsIcon from "../../assets/img/icons/projects.svg";
import createIcon from "../../assets/img/icons/create.svg";
import settingsIcon from "../../assets/img/icons/settings.svg";

const Menu = ({ menuId }) => {
  return (
    <ul className="menu" id={menuId}>
      <MenuItem
        itemUrl={routeCodes.INDEX}
        itemImgSrc={homeIcon}
        itemClass="home-icon"
        itemTitle="Home"
      />
      <MenuItem
        itemUrl={routeCodes.PROJECTS}
        itemImgSrc={projectsIcon}
        itemClass="projects-icon"
        itemTitle="Projects"
      />
      <MenuItem
        itemUrl={routeCodes.CREATE}
        itemImgSrc={createIcon}
        itemClass="create-icon"
        itemTitle="Create"
      />
      <MenuItem
        itemUrl={routeCodes.DASHBOARD}
        itemImgSrc={dashboardIcon}
        itemClass="dashboard-icon"
        itemTitle="Dashboard"
      />
      <MenuItem
        itemUrl={routeCodes.SETTINGS}
        itemImgSrc={settingsIcon}
        itemClass="settings-icon"
        itemTitle="Settings"
      />
    </ul>
  );
};

export default Menu;
