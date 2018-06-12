import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import UploadScreen from "./presenter";

class Container extends Component {
  state = {};
  render() {
    const {
      navigation: {
        state: {
          params: { url }
        }
      }
    } = this.props;
    console.log("params url", url);
    return <UploadScreen imageURL={url} />;
  }
}

export default Container;
