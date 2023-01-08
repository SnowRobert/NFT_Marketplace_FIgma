import React from "react";

import Avatar from "../../assets/icons/Avatar.svg";

import Artist from "../Artist/Artist";

import classes from "./NFTCard.module.css";

const NFTCard = ({ nft }) => {
  return (
    <div className={classes.container}>
      <img className={classes["nft-img"]} src={require(`../../assets/photos/nfts/${nft.img}.png`)} alt="nft" />
      <div className={classes.info}>
        <h1>{nft.name}</h1>
        <Artist avatar={Avatar} name={"username"}></Artist>
        <div className={classes["price-info"]}>
          <div>
            <h2>Price</h2>
            <h3>{`${nft.price} ETH`}</h3>
          </div>
          <div className={classes.bid}>
            <h2>Highest Bid</h2>
            <h4>{`${nft.highest_bid} wETH`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
