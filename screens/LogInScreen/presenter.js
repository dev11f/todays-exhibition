import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const LogInScreen = props => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.fbContainer} onPressOut={props.fbLogin}>
      <View style={styles.fbView}>
        <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
        <Text style={styles.fbText}>Log in with Facebook</Text>
      </View>
    </TouchableOpacity>
  </View>
);

LogInScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fbContainer: {
    marginTop: 50
  },
  fbView: {
    flexDirection: "row",
    alignItems: "center"
  },
  fbText: {
    color: "#3E99EE",
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 14
  }
});
export default LogInScreen;
