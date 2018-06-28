import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Content, Card, CardItem, Left, Body, Right } from "native-base";
import PropTypes from "prop-types";

const FeedHeader = props => (
  <View style={styles.container}>
    <TouchableOpacity onPressOut={props.sortByLikes}>
      <View style={{ borderRightWidth: 1, borderRightColor: "#7f7f7f" }}>
        <Text
          style={props.sortingBy === "likes" ? styles.BtnActive : styles.Btn}
        >
          추천순
        </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPressOut={props.sortByTime}>
      <View>
        <Text
          style={props.sortingBy === "time" ? styles.BtnActive : styles.Btn}
        >
          최신순
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

FeedHeader.propTpyes = {};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 5
  },
  Btn: {
    fontSize: 12,
    color: "#7f7f7f",
    marginHorizontal: 10
  },
  BtnActive: {
    fontSize: 12,
    color: "black",
    marginHorizontal: 10
  }
});

export default FeedHeader;
