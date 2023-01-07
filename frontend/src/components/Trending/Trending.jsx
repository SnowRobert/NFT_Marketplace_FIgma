import React from "react";

import classes from "./Trending.module.css";

const Trending = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <h1>Trending Collection</h1>
        <h2>Checkout our weekly updated trending collection.</h2>
      </div>
      <div className={classes.collection}>
        <div className={classes["collection-cards"]}>
          <img
            className={classes["primary-photo"]}
            src={require("../../assets/photos/PrimaryPhoto.png")}
            alt="PrimaryPhoto"
          />
          <div className={classes.cards}>
            <img src={require("../../assets/photos/SecondaryPhoto_1.png")} alt="SecondaryPhoto_1" />
            <img src={require("../../assets/photos/SecondaryPhoto_2.png")} alt="SecondaryPhoto_1" />
            <div className={classes.more}>
              <h1>1025+</h1>
            </div>
          </div>
        </div>
        <div className={classes.info}></div>
      </div>
    </div>
  );
};

export default Trending;
