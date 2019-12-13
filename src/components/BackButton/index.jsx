import React from "react";
import { ArrowLeft } from "react-feather";

const BackButton = props => {
  const { goBack } = props;

  return (
    <div className="back-button-container">
      <button className="back-button" onClick={goBack}>
        <ArrowLeft className="arrow-left" />
        Back
      </button>
    </div>
  );
};

export default BackButton;
