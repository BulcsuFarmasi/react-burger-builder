import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngedient";

class Burger extends Component {
  render() {
    console.log(this.props);
    let transformedIngredients = Object.keys(this.props.ingredients)
      .map(igKey => {
        return [...Array(this.props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
}

Burger.propTypes = {
  ingredients: PropTypes.object
};

export default Burger;
