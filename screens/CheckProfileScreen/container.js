import React, { Component } from "react";
import PropTypes from "prop-types";
import CheckProfileScreen from "./presenter";
import { ImagePicker, Permissions } from "expo";
import { Alert } from "react-native";

class Container extends Component {
  state = {
    hasCameraRollPermissions: null,
    username: null,
    avatar: null,
    isSubmitting: false
  };

  static propTypes = {
    firstLogin: PropTypes.func.isRequired
  };

  render() {
    return (
      <CheckProfileScreen
        handleAvatar={this._handleAvatar}
        handleUsername={this._handleUsername}
        submit={this._submit}
        {...this.state}
      />
    );
  }

  _handleUsername = text => {
    const { username } = this.state;
    this.setState({ username: text });
  };

  _handleAvatar = async () => {
    const { hasCameraRollPermissions, avatar } = this.state;
    const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({
      hasCameraRollPermissions: cameraRoll.status === "granted"
    });

    if (hasCameraRollPermissions === false) {
      Alert.alert("앨범 접근 권한이 없습니다");
    } else if (hasCameraRollPermissions === null) {
      console.log("null");
      return;
    } else if (hasCameraRollPermissions === true) {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1]
      });

      if (!result.cancelled) {
        this.setState({ avatar: result.uri });
      }
    }
  };

  _submit = async () => {
    const { username, avatar } = this.state;
    if (username && avatar) {
      this.setState({
        isSubmitting: true
      });

      // 서버 보내기
      console.log("username : ", username, "avatar :", avatar);
      firstLogin();
    }
  };
}

export default Container;
