import React from "react";

const ProgressBar = ({ value, text }) => (
  <div className="meter">
    <span
      style={{
        width: `${value}%`,
      }}
    >
      {value}%
    </span>
  </div>
);
export default ProgressBar;
