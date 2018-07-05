import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import LogInScreen from "./presenter";
import {} from "react-native-fbsdk";

class Container extends Component {
  state = {
    isFacebookSubmitting: false,
    isGoogleSubmitting: false
  };

  render() {
    return (
      <LogInScreen
        {...this.state}
        fbLogin={this._handleFBLogin}
        googleLogin={this._handleGoogleLogin}
      />
    );
  }

  _handleFBLogin = async () => {
    const { fbLogin } = this.props;
    this.setState({
      isFacebookSubmitting: true
    });
    const facebookResult = await fbLogin();
    if (!facebookResult) {
      this.setState({ isFacebookSubmitting: false });
    }
  };

  _handleGoogleLogin = async () => {
    const { googleLogin } = this.props;
    this.setState({
      isGoogleSubmitting: true
    });
    const GoogleResult = await googleLogin();
    if (!GoogleResult) {
      this.setState({ isGoogleSubmitting: false });
    }
  };
}

export default Container;
