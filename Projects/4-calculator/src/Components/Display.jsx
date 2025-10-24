import React from "react";

const Display = ({ value }) => {
  return (
    <input id="display" type="text" value={value} readOnly placeholder="0" />
  );
};

export default Display;
