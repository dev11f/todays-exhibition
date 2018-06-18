import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import FitImage from "react-native-fit-image";
import PropTypes from "prop-types";
const { width, height } = Dimensions.get("window");

const CommentsScreen = props => (
  <KeyboardAvoidingView style={styles.container}>
    <View style={styles.imageContainer}>
      <FitImage source={{ uri: props.content }} />
    </View>
  </KeyboardAvoidingView>
);
CommentsScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  imageContainer: {
    width
  }
});

export default CommentsScreen;
