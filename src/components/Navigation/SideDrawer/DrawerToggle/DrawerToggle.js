import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./DrawerToggle.module.css";

class DrawerToggle extends Component {
  render() {
    return (
      <div className={classes.DrawerToggle} onClick={this.props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

DrawerToggle.propTypes = {
  clicked: PropTypes.func
};

export default DrawerToggle;
