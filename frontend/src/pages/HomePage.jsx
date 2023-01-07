import React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Trending from "../components/Trending/Trending";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Trending />
    </>
  );
};

export default HomePage;
