import React from "react";

import classes from "./ArtistCard.module.css";

import Avatar from "../../assets/icons/Avatar.svg";

const ArtistCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <img src={Avatar} alt="avatar" />
      </div>
      <div className={classes.info}>
        <h1>username</h1>
        <h2>
          Total Sales: <span>32.12 ETH</span>
        </h2>
      </div>
      <div className={classes.btn}>
        
      </div>
    </div>
  );
};

export default ArtistCard;
