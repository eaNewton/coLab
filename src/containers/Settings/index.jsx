import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import routeCodes from "../../constants/routes";

const Settings = props => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Layout>
      <div className="grid">
        <div className="grid-x">
          <div className="page-title">
            <h2>Settings</h2>
          </div>
          <div className="settings-list-container">
            <ul className="settings-list">
              <li>
                <div id="theme-switch" className="settings-list-item">
                  <span>Theme</span>
                  <label className="switch">
                    <input
                      className="float-right"
                      type="checkbox"
                      onChange={handleThemeChange}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
              <li>
                <div className="settings-list-item">
                  <Link className="link" to={routeCodes.SETTINGS_ACCOUNT}>
                    Edit Account
                  </Link>
                </div>
              </li>
              <li>
                <div className="settings-list-item">
                  <Link className="link" to={routeCodes.SETTINGS_EMAIL}>
                    Change Email Address
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
