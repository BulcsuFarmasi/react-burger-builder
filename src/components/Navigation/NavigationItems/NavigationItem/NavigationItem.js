import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

import classes from "./NavigationItem.module.css";

class NavigationItem extends Component {
  render() {
    return (
      <li className={classes.NavigationItem}>
        <NavLink
          to={this.props.link}
          exact={this.props.exact}
          activeClassName={classes.active}
        >
          {this.props.children}
        </NavLink>
      </li>
    );
  }
}

NavigationItem.propTypes = {
  link: PropTypes.string,
  active: PropTypes.bool
};

export default NavigationItem;
