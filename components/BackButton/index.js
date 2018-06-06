import React from "react";
import PropTypes from "prop-types";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image
} from "react-native";

const BackButton = props => (
  <TouchableWithoutFeedback onPressOut={props.onPress}>
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/back.png")}
        style={styles.btn}
      />
    </View>
  </TouchableWithoutFeedback>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  btn: {
    width: 17,
    height: 17
  }
});

export default BackButton;
