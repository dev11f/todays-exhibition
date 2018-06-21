import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import { WebBrowser } from "expo";
const { width, height } = Dimensions.get("window");

const LogInScreen = props => (
  <View style={styles.container}>
    <View style={styles.upperContainer}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode={"contain"}
      />
    </View>

    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View style={styles.lines} />
      <Text style={styles.lineText}>소셜 계정으로 로그인</Text>
      <View style={styles.lines} />
    </View>

    <View style={styles.lowerContainer}>
      <View style={{ marginTop: 30 }}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={props.googleLogin}
          >
            <Image
              source={require("../../assets/images/google.png")}
              style={styles.buttonImage1}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => console.log("instagram login")}
          >
            <Image
              source={require("../../assets/images/instagram.png")}
              style={styles.buttonImage2}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPressOut={props.fbLogin}>
            <Image
              source={require("../../assets/images/facebook.png")}
              style={styles.buttonImage3}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => console.log("kakao login")}
          >
            <Image
              source={require("../../assets/images/kakao.png")}
              style={styles.buttonImage3}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 20
        }}
      >
        <Text
          style={{
            color: "#bababa",
            fontSize: 11
          }}
        >
          회원가입 시,{" "}
          <Text
            style={{
              color: "#bababa",
              fontSize: 11,
              fontWeight: "900"
            }}
            onPress={async () => {
              await WebBrowser.openBrowserAsync(
                "http://righthere.world/todays_exhibition_terms.html"
              );
            }}
          >
            이용약관
          </Text>
          과{" "}
          <Text
            style={{
              color: "#bababa",
              fontSize: 11,
              fontWeight: "900"
            }}
            onPress={async () => {
              await WebBrowser.openBrowserAsync(
                "http://righthere.world/todays_exhibition_privacy.html"
              );
            }}
          >
            개인정보 처리방침
          </Text>
          에 동의한 것으로 간주합니다
        </Text>
      </View>
    </View>
  </View>
);

LogInScreen.propTypes = {};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  upperContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: { width: 80 },
  lines: {
    backgroundColor: "#A2A2A2",
    height: StyleSheet.hairlineWidth,
    width: width / 2 - 90
  },
  lineText: {
    fontFamily: "noto-sans-bold",
    fontSize: 13,
    marginHorizontal: 10,
    // alignSelf: "center",
    color: "#616161"
  },
  lowerContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center"
  },
  btnContainer: {
    marginTop: 10,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  button: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    width: 200,
    marginBottom: 5,
    shadowColor: "#bababa",
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonImage1: {
    height: 27
  },
  buttonImage2: {
    height: 25
  },
  buttonImage3: {
    height: 20
  }
});
export default LogInScreen;
