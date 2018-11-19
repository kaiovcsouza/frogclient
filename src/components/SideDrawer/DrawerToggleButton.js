import React from "react";

import "./DrawerToggleButton.css";

const DrawerToggleButton = props => {
  return (
    <button className="toggle_btn" onClick={props.click}>
      <div className="line" />

      <div className="line" />
      <div className="line" />
    </button>
  );
};
export default DrawerToggleButton;
