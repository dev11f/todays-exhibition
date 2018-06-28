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
  ActivityIndicator,
  Platform
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
      <View style={{ padding: 0, margin: 0 }}>
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
              source={require("../../assets/images/profileedit.png")}
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

      <View
        style={{ alignItems: "stretch", width: 100, justifyContent: "center" }}
      >
        <TextInput
          placeholder={"작가명을 입력하세요"}
          value={props.username}
          style={styles.profile_username}
          returnKeyType={"done"}
          autoCapitalize={"none"}
          autoCorrect={false}
          autoFocus={true}
          enablesReturnKeyAutomatically={true}
          maxLength={10}
          onChangeText={props.handleUsername}
          underlineColorAndroid={"transparent"}
        />
      </View>
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
    // fontFamily: "noto-sans-bold",  // 이거 쓰면 안드로이드 밑에 패딩 생김
    fontSize: 15,
    padding: 0
    // width: 150,
  },
  btnContainer: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    backgroundColor: "#ffcd37",
    borderRadius: 50,
    width: 100,
    alignItems: "center",
    padding: 10,

    ...Platform.select({
      ios: {
        shadowColor: "#bababa",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: {
          height: 8,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  btnText: {
    color: "white",
    // fontFamily: "noto-sans-bold",
    fontWeight: "900"
    // margin: 0
  }
});

export default CheckProfileScreen;
