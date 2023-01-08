import React from "react";
import Artist from "../../ui/Artist/Artist";

import classes from "./Trending.module.css";

import Avatar from "../../assets/icons/Avatar.svg";
import Headline from "../../ui/Headline/Headline";

const Trending = () => {
  return (
    <div className={classes.container}>
      <Headline>
        <h1>Trending Collection</h1>
        <h2>Checkout our weekly updated trending collection.</h2>
      </Headline>
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
        <div className={classes.info}>
          <h1>DSGN Animals</h1>
          <Artist avatar={Avatar} name={"MrFox"} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
