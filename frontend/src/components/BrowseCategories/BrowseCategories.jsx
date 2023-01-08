import React from "react";
import Headline from "../../ui/Headline/Headline";

import classes from "./BrowseCategories.module.css";

import CategoryCard from "../../ui/CategoryCard/CategoryCard";

const categories = [
  { id: 0, name: "Art", img: "art.png" },
  { id: 1, name: "Collectibles", img: "collectibles.png" },
  { id: 2, name: "Music", img: "music.png" },
  { id: 3, name: "Photography", img: "photography.png" },
  { id: 4, name: "Sport", img: "sport.png" },
  { id: 5, name: "utility", img: "utility.png" },
  { id: 6, name: "Video", img: "video.png" },
  { id: 7, name: "Visual Worlds", img: "visual-worlds.png" },
];

const BrowseCategories = () => {
  return (
    <div className={classes.container}>
      <Headline>
        <h1>Browse Categories</h1>
      </Headline>
      <div className={classes.cards}>
        {categories.map((cat) => (
          <CategoryCard key={cat.id} name={cat.name} img={cat.img} />
        ))}
      </div>
    </div>
  );
};

export default BrowseCategories;
