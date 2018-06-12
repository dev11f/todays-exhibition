import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import PropTypes from "prop-types";
const { width, height } = Dimensions.get("window");

const UploadScreen = props => (
  <View style={styles.container}>
    <FadeIn style={styles.photoContainer}>
      <Image
        source={{ uri: props.imageURL }}
        style={styles.photo}
        // resizeMode={"contain"}
        // width={width}
      />
    </FadeIn>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  // photoContainer: { width, height: 600 },
  photo: { flex: 1 }
});

UploadScreen.propTypes = {};

export default UploadScreen;
