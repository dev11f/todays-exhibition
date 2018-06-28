import React, { PureComponent } from "react";
import { Text, Alert } from "react-native";
import PropTypes from "prop-types";
import Comment from "./presenter";

class Container extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <Comment {...this.props} />;
  }
}

export default Container;
