import React from "react";
import Headline from "../../ui/Headline/Headline";

import classes from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <div className={classes.container}>
      <Headline>
        <h1>How It Works</h1>
        <h2>Find out how to get started</h2>
      </Headline>
      <div className={classes.cards}>
        <div className={classes.card}>
          <img src={require("../../assets/photos/info/info_1.png")} alt="info" />
          <div className={classes.info}>
            <h1>Setup Your wallet</h1>
            <p>
              Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <img src={require("../../assets/photos/info/info_2.png")} alt="info" />
          <div className={classes.info}>
            <h1>Create Collection</h1>
            <p>Upload your work and setup your collection. Add a description, social links and floor price.</p>
          </div>
        </div>
        <div className={classes.card}>
          <img src={require("../../assets/photos/info/info_3.png")} alt="info" />
          <div className={classes.info}>
            <h1>Start Earning</h1>
            <p>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
