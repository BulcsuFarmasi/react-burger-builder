import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

class BuildControls extends Component {
  render() {
    return (
      <div className={classes.BuildControls}>
        <p>
          Current Price: <strong>{this.props.price.toFixed(2)}</strong>
        </p>
        {controls.map(control => (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => this.props.ingredientAdded(control.type)}
            removed={() => this.props.ingredientRemoved(control.type)}
            disabled={this.props.disabled[control.type]}
          />
        ))}
        <button
          className={classes.OrderButton}
          disabled={!this.props.purchasable}
          onClick={this.props.ordered}
        >
          {this.props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
        </button>
      </div>
    );
  }
}

BuildControls.propTypes = {
  price: PropTypes.number,
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  disabled: PropTypes.object,
  purchasable: PropTypes.bool,
  ordered: PropTypes.func
};

export default BuildControls;
