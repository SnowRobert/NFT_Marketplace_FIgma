import React from "react";
import ArtistCard from "../../ui/ArtistCard/ArtistCard";
import Btn from "../../ui/Btn/Btn";
import Headline from "../../ui/Headline/Headline";

import classes from "./TopCreators.module.css";

import { ReactComponent as RocketLauncher } from "../../assets/icons/RocketLaunch.svg";

const TopCreators = () => {
  return (
    <div className={classes.container}>
      <Headline>
        <h1>Top creators</h1>
        <h2>Checkout Top Rated Creators on the NFT Marketplace</h2>
      </Headline>
      <div className={classes["artist-cards"]}>
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </div>
      <Btn>
        <RocketLauncher /> <h1>Get Started</h1>
      </Btn>
    </div>
  );
};

export default TopCreators;
