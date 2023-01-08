import React from "react";

import classes from "./Btn.module.css";

const Btn = ({ children, from }) => {
  return (
    <div id={from === "Hero" ? classes.hero : ""} className={classes.container}>
      <button>{children}</button>
    </div>
  );
};

export default Btn;
