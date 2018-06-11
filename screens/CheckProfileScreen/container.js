import React, { Component } from "react";
import PropTypes from "prop-types";
import CheckProfileScreen from "./presenter";
import { ImagePicker, Permissions } from "expo";
import { Alert } from "react-native";

class Container extends Component {
  state = {
    hasCameraRollPermissions: null
  };
  static propTypes = {};

  render() {
    return <CheckProfileScreen handleAvatar={this._handleAvatar} />;
  }

  _handleAvatar = async () => {
    const { hasCameraRollPermissions } = this.state;
    const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({
      hasCameraRollPermissions: cameraRoll.status === "granted"
    });
    console.log("cameraRoll.status", cameraRoll);

    if (hasCameraRollPermissions === false) {
      Alert.alert("앨범 접근 권한이 없습니다");
    } else if (hasCameraRollPermissions === null) {
      console.log("null");
      return;
    } else if (hasCameraRollPermissions === true) {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    }
  };
}

export default Container;
