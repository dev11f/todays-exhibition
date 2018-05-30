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
import PropTypes from "prop-types";

const ProfileScreen = props => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require("../../assets/images/noPhoto.jpg")}
          style={styles.profile_avatar}
          // resizeMode={"cover"}
        />

        {/* <Text style={styles.profile_username}> {props.user.username}</Text> */}

        <TextInput
          // placeholder={props.user.username}
          value={props.user.username}
          style={styles.profile_username}
          returnKeyType={"done"}
          autoCapitalize={"none"}
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          maxLength={10}
          onBlur={() => console.log("blur")}
        />
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
    width: 120,
    height: 120,
    borderRadius: 60
  },
  profile_username: {
    marginTop: 25,
    // fontWeight: "600",
    fontSize: 20
  }
});

ProfileScreen.propTypes = {
  // object 안에 내용까지 체크하기
  user: PropTypes.object.isRequired,
  changeAvatar: PropTypes.func.isRequired,
  changeUsername: PropTypes.func.isRequired
};

export default ProfileScreen;
