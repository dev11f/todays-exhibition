import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import ProfileScreen from "./presenter";
import { randomUser } from "../../util";

class Container extends Component {
  state = {
    user: randomUser()
  };
  render() {
    console.log("random user", this.state.user);
    return (
      <ProfileScreen
        {...this.state}
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
