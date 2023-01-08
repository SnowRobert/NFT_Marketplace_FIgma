import React from "react";
import BrowseCategories from "../components/BrowseCategories/BrowseCategories";
import DiscoverNFTs from "../components/DiscoverNFTs/DiscoverNFTs";
import Hero from "../components/Hero/Hero";
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
    </>
  );
};

export default HomePage;
