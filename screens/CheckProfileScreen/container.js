import React, { Component } from "react";
import PropTypes from "prop-types";
import CheckProfileScreen from "./presenter";
import { ImagePicker, Permissions } from "expo";
import { Alert, ImageStore } from "react-native";
import { Buffer } from "buffer";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      avatar: null,
      avatarBase64: null,
      isSubmitting: false,
      avatarSelected: false
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
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.3,
        base64: true
      });

      if (!result.cancelled) {
        this.setState({
          avatar: result.uri,
          avatarBase64: result.base64,
          avatarSelected: true
        });
      }
    } else if (status !== "granted") {
      Alert.alert(
        "앨범 접근 권한이 없습니다. 설정에 가서 앨범 권한을 승인해주세요!"
      );
    } else {
      return;
    }
  };

  // avatar 없을 경우.
  _submit = async () => {
    const { username, avatarBase64, avatarSelected } = this.state;
    const { firstLogin, updateProfile, updateNickname, profile } = this.props;
    if (username) {
      this.setState({
        isSubmitting: true
      });

      if (avatarSelected === false) {
        const updateUsernameResult = await updateNickname(username);
        console.log("update username");
        if (updateUsernameResult) {
          firstLogin();
        }
      } else if (avatarSelected === true) {
        const buffer = new Buffer(avatarBase64, "base64");

        const updateProfileResult = await updateProfile(buffer, username);
        console.log("update userProfile");
        if (updateProfileResult) {
          firstLogin();
        }
      }

      // ImageStore.getBase64ForTag(
      //   avatar,
      //   data => console.log("base64data", data),
      //   error => console.log("imagestore error", error)
      // );

      // const response = await fetch(avatar);
      // console.log("response", response);
      // const blob = await response.blob();
      // console.log("blob", blob);

      // const uploadProfileResult = await uploadProfile(blob, username);
      // console.log("uploadProfileResult", uploadProfileResult);
      // if (uploadProfileResult) {
      //   firstLogin();
      // }

      // 내 생각에 blob은 디스크에 그냥 박아 넣는 것 같고, buffer는 말 그대로 메모리 버퍼에 올리는 듯.

      // image url (local이든 remote이든) 에서 base64 추출
      // base64를 buffer에 올리기.
      // buffer를 s3로 넣기.
    }
  };
}

export default Container;
