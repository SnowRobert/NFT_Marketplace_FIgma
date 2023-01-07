import React from "react";

import classes from "./Hero.module.css";

import Avatar from "../../assets/icons/Avatar.svg";
import RocketLauncher from "../../assets/icons/RocketLaunch.svg";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <h1>Discover digital art & Collect NFTs</h1>
        <h2>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</h2>
      </div>
      <div className={classes.card}>
        <img className={classes["card-photo"]} src={require("../../assets/photos/Placeholder.png")} alt="nft" />
        <h1>Space Walking</h1>
        <div className={classes.artist}>
          <img src={Avatar} alt="avatar" />
          <h3>Animakid</h3>
        </div>
      </div>
      <button>
        <img src={RocketLauncher} alt="RocketLauncher" /> <h1>Get Started</h1>
      </button>
      <div className={classes.info}>
        <ul>
          <li>
            <h1>240k+</h1>
            <h2>Total sale</h2>
          </li>
          <li>
            <h1>100k+</h1>
            <h2>Auctions</h2>
          </li>
          <li>
            <h1>240k+</h1>
            <h2>Artists</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
