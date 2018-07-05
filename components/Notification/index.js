import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import FadeIn from "react-native-fade-in-image";
const { width, height } = Dimensions.get("window");

const Notification = props => (
  <TouchableOpacity style={styles.container}>
    <FadeIn>
      <Image
        sorce={
          props.creator.profile_image
            ? { uri: props.creator.profile_image }
            : require("../../assets/images/noPhoto.jpg")
        }
        style={styles.avatar}
        defaultSource={require("../../assets/images/noPhoto.jpg")}
      />
    </FadeIn>

    <Text style={styles.centerText}>
      <Text style={styles.username}>{props.creator.username}</Text>
      {props.notification_type === "comment" &&
        `이 댓글을 남겼습니다 : ${props.comment}`}
      {props.notification_type === "like" &&
        `작가님이 회원님의 작품을 추천합니다`}
    </Text>

    <Image
      source={{ uri: props.image.file }}
      style={styles.payload}
      defaultSource={require("../../assets/images/photoPlaceholder.png")}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 15
  },
  centerText: { marginRight: "auto", width: width / 2 },
  username: { fontWeight: "600" },
  payload: {
    height: 50,
    width: 50
  }
});

export default Notification;
