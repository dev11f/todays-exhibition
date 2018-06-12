import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
const { width, height } = Dimensions.get("window");

const CheckProfileScreen = props => (
  <View style={styles.container}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 0.3
        // marginTop: 50
      }}
    >
      <View style={styles.lines} />
      <Text style={styles.lineText}>프로필</Text>
      <View style={styles.lines} />
    </View>

    <View style={styles.profileContainer}>
      <View>
        <Image
          source={
            props.avatar
              ? { uri: props.avatar }
              : require("../../assets/images/noPhoto.jpg")
          }
          style={styles.profile_avatar}
          // resizeMode={"cover"}
        />
        <View style={styles.changeBtnContainer}>
          <TouchableOpacity onPressOut={props.handleAvatar}>
            <Image
              source={require("../../assets/images/changeAvatar.png")}
              style={styles.changeBtn}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
          width: 20,
          borderColor: "black",
          borderBottomWidth: 1
        }}
      />

      <TextInput
        value={"국형빈빈"}
        style={styles.profile_username}
        returnKeyType={"done"}
        autoCapitalize={"none"}
        autoCorrect={false}
        autoFocus={true}
        // onFocus={() => Keyboard.dismiss()}
        enablesReturnKeyAutomatically={true}
        maxLength={10}
        // onBlur={() => console.log("blur")}
        onChangeText={props.handleUsername}
      />
    </View>

    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.button} onPressOut={props.submit}>
        {props.isSubmitting ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.btnText}>입 장</Text>
        )}
      </TouchableOpacity>
    </View>
  </View>
);

CheckProfileScreen.propTypes = {
  handleAvatar: PropTypes.func.isRequired,
  handleUsername: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lines: {
    backgroundColor: "#A2A2A2",
    height: StyleSheet.hairlineWidth,
    width: width / 2 - 90
  },
  lineText: {
    fontFamily: "noto-sans-bold",
    fontSize: 15,
    marginHorizontal: 10,
    // alignSelf: "center",
    color: "#616161"
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  profile_avatar: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  changeBtnContainer: {
    position: "absolute",
    top: 10,
    right: -10
  },
  changeBtn: {
    width: 40,
    height: 40
  },
  profile_username: {
    marginTop: 15,
    fontFamily: "noto-sans-bold",
    // fontWeight: "600",
    fontSize: 19
  },
  btnContainer: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    backgroundColor: "#ffcd37",
    borderRadius: 50,
    padding: 10,
    width: 100,

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

export default CheckProfileScreen;
