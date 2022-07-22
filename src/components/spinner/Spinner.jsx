import React from "react";
import "./spinner.scss";

/**
 * @name Spinner
 * @description create a spinner with animation when API is calling.
 * @returns {JSX.Element}
 */

const Spinner = () => {
  return (
    <div className="loadingSpinnerContainer">
      <div className="loadingSpinner"></div>
    </div>
  );
};

export default Spinner;
