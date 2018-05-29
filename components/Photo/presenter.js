import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";
const { width, height } = Dimensions.get("window");

const Photo = props => (
  <View style={styles.container}>
    <Text> 작가명 : {props.username}</Text>
    <Text> 작품명 : {props.title}</Text>
    <Text> 추천 수 : {props.like_count} </Text>
    <Text> 비추천 수 : {props.hate_count}</Text>
    <Text />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

Photo.propTypes = {};

export default Photo;
