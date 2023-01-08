import React from "react";

import classes from "./Footer.module.css";

import Logo from "../../assets/icons/Logo.svg";

const Footer = () => {
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={Logo} alt="Storefront" />
      <h2>NFT marketplace UI created with Anima for Figma.</h2>
      <div className={classes.line}></div>
      <h2>Ⓒ NFT Market. Use this template freely.</h2>
    </div>
  );
};

export default Footer;
