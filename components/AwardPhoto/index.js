import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform
} from "react-native";
import PropTypes from "prop-types";
import Ionicons from "react-native-vector-icons/Ionicons";
import FadeIn from "react-native-fade-in-image";
import Description from "../Description";
const { width, height } = Dimensions.get("window");

const AwardPhoto = props => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>안주</Text>
      <Text style={styles.date}>2018년 6월 5일</Text>
    </View>

    <View style={styles.photoContainer}>
      <View style={styles.imageContainer}>
        <FadeIn>
          <Image
            source={
              props.content
                ? { uri: props.content }
                : require("../../assets/images/sample.jpg")
            }
            style={{ width: width - 60, height: width - 60 }}
          />
        </FadeIn>
        <View style={styles.medalContainer}>
          <Image
            source={require("../../assets/winner/first.png")}
            style={styles.medalIcon}
          />
        </View>
      </View>

      <View style={styles.photoMeta}>
        <View style={styles.photoActions} />
        <View style={styles.description}>
          <Description title={props.title} username={props.nickname} />
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { marginTop: 15 },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginHorizontal: 15
  },
  title: { fontFamily: "noto-sans-bold", fontSize: 18 },
  date: { color: "#616161", fontSize: 12 },

  photoContainer: { marginTop: 20 },
  imageContainer: {
    alignSelf: "center",
    // overflow: "hidden"
    width: width - 30,
    borderWidth: 15,
    borderColor: "#f9f9f9",

    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  medalContainer: {
    position: "absolute",
    top: -28,
    left: -28
  },
  medalIcon: {
    width: 70,
    height: 70
  },
  photoMeta: {
    marginTop: 5,
    flexDirection: "row"
  },
  photoActions: {
    flex: 1
  },
  description: {
    flex: 1.8,
    marginRight: 10,
    marginTop: -35
  }
});

export default AwardPhoto;
