import React, { PureComponent } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Photo from "./presenter";

class Container extends PureComponent {
  constructor(props) {
    super(props);
    // console.log("content", props);
    this.state = {
      isLiked: props.like_flag,
      isHated: props.hate_flag
    };
  }
  render() {
    return <Photo {...this.props} {...this.state} />;
  }
}

export default Container;
