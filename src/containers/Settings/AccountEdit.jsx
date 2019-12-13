import React from "react";
import Layout from "../../components/Layout";
import BackButton from "../../components/BackButton";

const AccountEdit = props => {
  const { history } = props;

  console.log("history: ", history);

  return (
    <Layout>
      <div className="grid">
        <div className="grid-x">
          <div className="page-title small-12">
            <BackButton goBack={history.goBack} />
            <h2>Edit Account</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountEdit;
