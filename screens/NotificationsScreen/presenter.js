import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

const NotificationsScreen = props => (
  <View style={styles.container}>
    <Text>Notifications Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

NotificationsScreen.propTypes = {};

export default NotificationsScreen;
