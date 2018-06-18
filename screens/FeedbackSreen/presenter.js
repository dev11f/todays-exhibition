import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import PropTypes from "prop-types";
import Photo from "../../components/Photo";

const FeedbackScreen = props => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        더 좋은 사진전을 위해 {"\n"}의견을 남겨주세요.
      </Text>
    </View>

    <View style={styles.textContainer}>
      <TextInput
        // value={"국형빈빈"}
        style={styles.feedback}
        returnKeyType={"done"}
        autoCapitalize={"none"}
        autoCorrect={false}
        autoFocus={true}
        enablesReturnKeyAutomatically={true}
        multiline={true}
        onChangeText={props.handleFeedback}
      />
    </View>

    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPressOut={props.submit}>
          {props.isSubmitting ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.btnText}>보내기</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  </View>
);

FeedbackScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  titleContainer: {
    flex: 1.5
  },
  title: {
    marginTop: 50,
    fontFamily: "noto-sans-bold",
    fontSize: 25,
    marginHorizontal: 20
  },
  textContainer: {
    flex: 1.5,
    marginHorizontal: 30,
    justifyContent: "flex-end"
  },

  feedback: {
    fontSize: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    marginBottom: 40
  },
  btnContainer: {
    // flex: 1,
    alignItems: "flex-end",
    marginHorizontal: 30,
    alignSelf: "flex-end"
  },
  button: {
    backgroundColor: "black",
    borderRadius: 50,
    width: 100,
    height: 35,

    shadowColor: "#bababa",
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    color: "white",
    fontFamily: "noto-sans-bold"
  }
});

export default FeedbackScreen;
