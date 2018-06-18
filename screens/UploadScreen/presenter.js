import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import FitImage from "react-native-fit-image";
import PropTypes from "prop-types";
const { width, height } = Dimensions.get("window");

const UploadScreen = props => (
  <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
    <ScrollView>
      <View style={styles.photoContainer}>
        <FitImage
          source={{ uri: props.imageURL }}
          // style={styles.photo}
          // resizeMode={"contain"}
          // width={width - 200}
          // style={{ width: width - 100 }}
        />
      </View>

      <View style={styles.textContainer}>
        <TextInput
          placeholder={"작품명"}
          style={styles.text}
          returnKeyType={"done"}
          autoCapitalize={"none"}
          autoCorrect={false}
          // autoFocus={true}
          enablesReturnKeyAutomatically={true}
          onChangeText={props.handleText}
          maxLength={20}
        />
        <Text style={styles.textAvailable}>{props.captionLengthAvailable}</Text>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  photoContainer: { width: width - 100, alignSelf: "center" },
  photo: { flex: 1 },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 10
  },
  text: {
    paddingBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 5
  },
  textAvailable: {
    fontSize: 13,
    fontWeight: "600",
    color: "grey",
    alignSelf: "flex-end"
  }
});

UploadScreen.propTypes = {};

export default UploadScreen;
