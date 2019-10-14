import React, { Component } from "react";

import PropTypes from "prop-types";

import classes from "./Backdrop.module.css";

class Backdrop extends Component {
  render() {
    return this.props.show ? (
      <div className={classes.Backdrop} onClick={this.props.clicked}></div>
    ) : null;
  }
}

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func
};

export default Backdrop;
