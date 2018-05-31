import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Content, Card, CardItem, Left, Body, Right } from "native-base";
import PropTypes from "prop-types";

const FeedHeader = props => (
  // <View>
  <View style={styles.container}>
    <View style={{ borderRightWidth: 1, borderRightColor: "#7f7f7f" }}>
      <Text style={styles.Btn}>Like</Text>
    </View>
    <View>
      <Text style={styles.Btn}>Latest</Text>
    </View>
  </View>
  // </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 5
  },
  Btn: {
    fontSize: 15,
    color: "#7f7f7f",
    marginHorizontal: 10
  }
});

export default FeedHeader;
