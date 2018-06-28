import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const BackButton = props => (
  <TouchableOpacity onPressOut={props.onPress}>
    <View style={styles.container}>
      <Image
        source={require("../../assets/navigationbar/back.png")}
        style={styles.btn}
      />
    </View>
  </TouchableOpacity>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20
  },
  btn: {
    width: 17,
    height: 17
  }
});

export default BackButton;
