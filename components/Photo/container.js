import React, { Component } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Photo from "./presenter";

class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.avatar);
    return <Photo {...this.props} />;
  }
}

export default Container;
