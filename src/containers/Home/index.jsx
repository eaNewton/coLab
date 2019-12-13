import React, { PureComponent } from "react";
import Layout from "../../components/Layout";

class Home extends PureComponent {
  render() {
    return (
      <Layout>
        <div className="grid">
          <div className="grid-x">
            <div className="page-title">
              <h2>Home</h2>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
