import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import TabsNavigation from "../../navigation/TabsNavigation";

class AppContainer extends Component {
  static propTypes = {};

  // 로그인 상태 체크

  render() {
    return <TabsNavigation />;
  }
}

const styles = StyleSheet.create({});

export default AppContainer;
