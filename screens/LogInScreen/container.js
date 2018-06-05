import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import LogInScreen from "./presenter";

class Container extends Component {
  state = {
    isSubmitting: false
  };

  render() {
    return <LogInScreen fbLogin={this._handleFBLogin} />;
  }

  _handleFBLogin = async () => {
    const { fbLogin } = this.props;
    this.setState({
      isSubmitting: true
    });
    const facebookResult = await fbLogin();
    if (!facebookResult) {
      this.setState({ isSubmitting: false });
    }
  };
}

export default Container;
