import React, { Component } from "react";
import PropTypes from "prop-types";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

import classes from "./SideDrawer.module.css";

class SideDrawer extends Component {
  render() {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (this.props.open) {
      attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
      <Aux>
        <Backdrop show={this.props.open} clicked={this.props.closed} />
        <div className={attachedClasses.join(" ")}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </Aux>
    );
  }
}

SideDrawer.propTypes = {
  open: PropTypes.bool,
  clicked: PropTypes.func
};

export default SideDrawer;
