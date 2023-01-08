import React from "react";

import BrowseCategories from "../components/BrowseCategories/BrowseCategories";
import DiscoverNFTs from "../components/DiscoverNFTs/DiscoverNFTs";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Nav from "../components/Nav/Nav";
import TopCreators from "../components/TopCreators/TopCreators";
import Trending from "../components/Trending/Trending";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Trending />
      <TopCreators />
      <BrowseCategories />
      <DiscoverNFTs />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default HomePage;
