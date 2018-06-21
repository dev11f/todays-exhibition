import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import MyAwards from "../../components/MyAwards/";
import PropTypes from "prop-types";

const ProfileScreen = props => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={
            props.profile.avatar
              ? { uri: props.profile.avatar }
              : require("../../assets/images/noPhoto.jpg")
          }
          defaultSource={require("../../assets/images/noPhoto.jpg")}
          style={styles.profile_avatar}
          // resizeMode={"cover"}
        />

        {/* <Text style={styles.profile_username}> {props.user.username}</Text> */}

        <TextInput
          // placeholder={props.user.username}
          value={props.profile.nickname}
          style={styles.profile_username}
          returnKeyType={"done"}
          autoCapitalize={"none"}
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          maxLength={10}
          onBlur={() => console.log("blur")}
        />

        <View style={styles.pointsContainer}>
          <Image
            source={require("../../assets/images/point.png")}
            style={styles.pointsIcon}
          />
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: "#f8cf47"
            }}
          >
            <Text style={styles.points}>{props.profile.point}</Text>
          </View>
        </View>
      </View>

      <View>
        <MyAwards />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  profile: {
    marginTop: 30,
    alignItems: "center"
  },
  profile_avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  profile_username: {
    marginTop: 15,
    fontFamily: "noto-sans-bold",
    // fontWeight: "600",
    fontSize: 15
  },
  pointsContainer: {
    flexDirection: "row",
    marginTop: 15
  },
  pointsIcon: { width: 20, height: 20, marginRight: 5 },
  points: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: "700"
  }
});

ProfileScreen.propTypes = {
  // object 안에 내용까지 체크하기
  // user: PropTypes.object.isRequired,
  changeAvatar: PropTypes.func.isRequired,
  changeUsername: PropTypes.func.isRequired
};

export default ProfileScreen;
