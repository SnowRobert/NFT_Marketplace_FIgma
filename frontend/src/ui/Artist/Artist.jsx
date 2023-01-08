import React from "react";

import classes from "./Artist.module.css";

const Artist = ({ avatar, name }) => {
  return (
    <div className={classes.container}>
      <img src={avatar} alt="avatar" />
      <h3>{name}</h3>
    </div>
  );
};

export default Artist;
