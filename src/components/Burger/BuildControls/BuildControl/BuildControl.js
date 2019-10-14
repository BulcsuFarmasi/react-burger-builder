import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./BuildControl.module.css";

class BuildControl extends Component {
  render() {
    return (
      <div className={classes.BuildControl}>
        <div className={classes.Label}>{this.props.label}</div>
        <button
          className={classes.Less}
          onClick={this.props.removed}
          disabled={this.props.disabled}
        >
          Less
        </button>
        <button className={classes.More} onClick={this.props.added}>
          More
        </button>
      </div>
    );
  }
}

BuildControl.propsTypes = {
  label: PropTypes.string,
  removed: PropTypes.func,
  disabled: PropTypes.func,
  added: PropTypes.func
};

export default BuildControl;
