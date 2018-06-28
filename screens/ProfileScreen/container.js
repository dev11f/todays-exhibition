import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import PropTypes from "prop-types";
import ProfileScreen from "./presenter";

class Container extends Component {
  state = {
    username: this.props.profile.nickname
  };

  render() {
    return (
      <ProfileScreen
        {...this.props}
        {...this.state}
        changeAvatar={this._changeAvatar}
        changeUsername={this._changeUsername}
        submitUsername={this._submitUsername}
        showAlert={this._showAlert}
      />
    );
  }

  _changeAvatar = () => {
    // change Avater
  };

  _changeUsername = text => {
    const { username } = this.state;
    this.setState({
      username: text
    });
  };

  _submitUsername = async () => {
    const { username } = this.state;
    const { submitUsername } = this.props;

    if (username) {
      const updateUsernameResult = await submitUsername(username);

      if (updateUsernameResult) {
        console.log("updated profile", this.props.profile);
      }
    }
  };

  _showAlert = () => {
    return Alert.alert("작가명을 바꾸시겠습니까?", null, [
      {
        text: "취소",
        onPress: () => {
          this.setState({
            username: this.props.profile.nickname
          });
        }
      },
      { text: "예", onPress: () => console.log("ok") }
    ]);
  };
}

export default Container;
