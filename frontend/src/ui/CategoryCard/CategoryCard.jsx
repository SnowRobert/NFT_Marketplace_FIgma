import React from "react";

import classes from "./CategoryCard.module.css";

const CategoryCard = ({ name, img }) => {
  return (
    <div className={classes.container}>
      <img src={require(`../../assets/photos/categories/${img}`)} alt="nft" />
      <h1>{name}</h1>
    </div>
  );
};

export default CategoryCard;
