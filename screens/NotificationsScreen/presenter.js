import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import Notification from "../../components/Notification";

const NotificationsScreen = props => (
  // 노티 없을 때

  <View style={styles.container}>
    <Image
      source={require("../../assets/images/no_noti.png")}
      style={styles.noNotiIcon}
      resizeMode={"contain"}
    />
    <Text style={styles.noNotiText}>아직 도착한 소식이 없네요 </Text>
  </View>

  // 노티 있을 때
  // {/* <Notification /> */}
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  noNotiIcon: {
    width: 80,
    height: 80
  },
  noNotiText: {
    marginTop: 20,
    fontSize: 14,
    color: "#cccccc"
  }
});

NotificationsScreen.propTypes = {};

export default NotificationsScreen;
