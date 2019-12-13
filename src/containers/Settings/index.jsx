import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import Layout from "../../components/Layout";
import routeCodes from "../../constants/routes";

const Settings = props => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <Layout className="bg-settings">
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
                      className="switch float-right"
                      type="checkbox"
                      checked={!!dark ? true : false}
                      onChange={() => toggle()}
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
