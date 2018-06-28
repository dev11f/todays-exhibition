import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Keyboard,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import AwardPhoto from "../../components/AwardPhoto";
const { width, height } = Dimensions.get("window");

const ProfileScreen = props => (
  <ScrollView style={styles.container}>
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

      <TextInput
        placeholder={props.profile.nickname}
        value={props.username}
        style={styles.profile_username}
        maxLength={10}
        editable={false}
        underlineColorAndroid={"transparent"}
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

    <View style={styles.myAwardsContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={styles.lines} />
        <Text style={styles.lineText}>수상내역</Text>
        <View style={styles.lines} />
      </View>

      {/* <View style={{ alignItems: "center", marginTop: 80 }}>
          <Image
            source={require("../../assets/images/no_award.png")}
            style={{ width: 80, height: 80, marginBottom: 15 }}
            resizeMode={"contain"}
          />
          <Text style={styles.awardText}>아직 수상한 작품이 없네요.</Text>
          <Text style={styles.awardText}>분발하세요!</Text>
        </View> */}

      <View>
        <AwardPhoto />
        <AwardPhoto />
      </View>
    </View>
  </ScrollView>
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
    // fontFamily: "noto-sans-bold",
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
  },
  myAwardsContainer: {
    marginTop: 30
  },
  lines: {
    backgroundColor: "#A2A2A2",
    height: StyleSheet.hairlineWidth,
    width: width / 2 - 60
  },

  lineText: {
    fontFamily: "noto-sans-bold",
    fontSize: 13,
    marginHorizontal: 10,
    // alignSelf: "center",
    color: "#616161"
  },
  awardText: {
    marginTop: 4,
    fontSize: 14,
    color: "#cccccc"
  }
});

ProfileScreen.propTypes = {
  // object 안에 내용까지 체크하기
  // user: PropTypes.object.isRequired,
  changeAvatar: PropTypes.func.isRequired,
  changeUsername: PropTypes.func.isRequired
};

export default ProfileScreen;
