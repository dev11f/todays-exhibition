import React, { PureComponent } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Photo from "./presenter";

class Container extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <Photo {...this.props} />;
  }
}

export default Container;