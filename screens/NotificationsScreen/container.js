import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationsScreen from "./presenter";

class Container extends Component {
  render() {
    return <NotificationsScreen />;
  }

  _refresh = () => {};
}

export default Container;
