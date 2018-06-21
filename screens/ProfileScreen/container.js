import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import ProfileScreen from "./presenter";

class Container extends Component {
  state = {
    // user: randomUser()
  };

  render() {
    return (
      <ProfileScreen
        {...this.props}
        changeAvatar={this._changeAvatar}
        changeUsername={this._changeUsername}
      />
    );
  }

  _changeAvatar = () => {
    // change Avater
  };

  _changeUsername = () => {
    // change Username
  };
}

export default Container;
