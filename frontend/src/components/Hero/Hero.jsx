import React from "react";

import classes from "./Hero.module.css";

import Avatar from "../../assets/icons/Avatar.svg";
import { ReactComponent as RocketLauncher } from "../../assets/icons/RocketLaunch.svg";
import Artist from "../../ui/Artist/Artist";
import Headline from "../../ui/Headline/Headline";
import Btn from "../../ui/Btn/Btn";

const Hero = () => {
  return (
    <div className={classes.container}>
      <Headline>
        <h1>Discover digital art & Collect NFTs</h1>
        <h2>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</h2>
      </Headline>
      <div className={classes.card}>
        <img className={classes["card-photo"]} src={require("../../assets/photos/Placeholder.png")} alt="nft" />
        <h1>Space Walking</h1>
        <div className={classes.artist}>
          <Artist avatar={Avatar} name={"Animakid"} />
        </div>
      </div>
      <Btn from={'Hero'}>
        <RocketLauncher /> <h1>Get Started</h1>
      </Btn>
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
