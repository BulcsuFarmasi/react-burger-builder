import React, { Component } from "react";

import PropTypes from "prop-types";

import classes from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button
        disabled={this.props.disabled}
        className={[classes.Button, classes[this.props.btnType]].join(" ")}
        onClick={this.props.clicked}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  btnType: PropTypes.string,
  clicked: PropTypes.func
};

export default Button;
