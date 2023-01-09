import React, { useState } from "react";

import classes from "./Nav.module.css";

import Logo from "../../assets/icons/Logo.svg";

import { ReactComponent as User_icon } from "../../assets/icons/User.svg";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.container}>
      <img className={classes.logo} src={Logo} alt="Storefront" />
      <div className={classes.nav}>
        <ul>
          <li>Marketplace</li>
          <li>Rankings</li>
          <li>Connect a wallet</li>
          <li>
            <button>
              <User_icon /> Sign up
            </button>
          </li>
        </ul>
      </div>
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
