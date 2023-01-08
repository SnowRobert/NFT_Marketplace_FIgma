import React from "react";

import classes from "./Headline.module.css";

const Headline = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Headline;
