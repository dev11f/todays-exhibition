import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Photo from "../../components/Photo";

const CommentsScreen = props => (
  <View style={styles.container}>
    <Photo {...props} />
  </View>
);
CommentsScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CommentsScreen;
