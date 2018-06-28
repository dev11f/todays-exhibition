import React, { Component } from "react";
import PropTypes from "prop-types";
import CheckProfileScreen from "./presenter";
import { ImagePicker, Permissions } from "expo";
import { Alert } from "react-native";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      avatar: null,
      isSubmitting: false
    };
  }

  static propTypes = {
    // profile: PropTypes.object.isRequired,
    firstLogin: PropTypes.func.isRequired
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.profile) {
      console.log("늦게 로딩");
      this.setState({
        // username: nextProps.profile.nickname,
        avatar: nextProps.profile.avatar
      });
    }
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
    const { avatar } = this.state;
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.3
      });

      if (!result.cancelled) {
        this.setState({ avatar: result.uri });
      }
    } else if (status !== "granted") {
      Alert.alert(
        "앨범 접근 권한이 없습니다. 설정에 가서 앨범 권한을 승인해주세요!"
      );
    } else {
      return;
    }
  };

  _submit = async () => {
    const { username, avatar } = this.state;
    const { firstLogin, uploadProfile, profile } = this.props;
    if (username && avatar) {
      this.setState({
        isSubmitting: true
      });

      const response = await fetch(avatar);
      const blob = await response.blob();

      const uploadProfileResult = await uploadProfile(blob, username);
      if (uploadProfileResult) {
        firstLogin();
      }
    }
  };
}

export default Container;
