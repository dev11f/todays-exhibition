import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentsScreen from "./presenter";

class Container extends Component {
  state = {};
  static propTypes = {};

  render() {
    console.log(this.props);
    return <CommentsScreen {...this.props.navigation.state.params} />;
  }
}

export default Container;
