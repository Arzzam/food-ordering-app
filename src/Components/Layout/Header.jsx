import React from "react";

import meals_image from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Ordering App</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={meals_image} alt="meals_image" />
      </div>
    </React.Fragment>
  );
};

export default Header;
