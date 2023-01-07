import React, { useState } from "react";

import classes from "./Nav.module.css";

import Logo from "../../assets/icons/Logo.svg";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.container}>
      <img className={classes.logo} src={Logo} alt="Storefront" />
      <div
        className={`${classes.bmenu} ${isActive ? classes["is-active"] : ""}`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Nav;
