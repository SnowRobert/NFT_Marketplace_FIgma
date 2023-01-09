import React from "react";

import Headline from "../../ui/Headline/Headline";
import NFTCard from "../../ui/NFTCard/NFTCard";
import { ReactComponent as Eye } from "../../assets/icons/Eye.svg";
import Btn from "../../ui/Btn/Btn";

import classes from "./DiscoverNFTs.module.css";

const NFTs = [
  { id: 0, name: "Distant Galaxy", price: 1.65, highest_bid: 0.33, img: "distant-galaxy" },
  { id: 1, name: "Life Of Edena", price: 1.65, highest_bid: 0.33, img: "life-of-edena" },
  // { id: 2, name: "AstroFiction", price: 1.65, highest_bid: 0.33, img: "astroFiction" },
];

const DiscoverNFTs = () => {
  return (
    <div className={classes.container}>
      <Headline>
        <h1>Discover More NFTs</h1>
        <h2>Explore new trending NFTs</h2>
      </Headline>
      <div className={classes.cards}>
        {NFTs.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
      <Btn>
        <Eye /> <h1>See All</h1>
      </Btn>
    </div>
  );
};

export default DiscoverNFTs;
