import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import Ionicons from "react-native-vector-icons/Ionicons";
const { width, height } = Dimensions.get("window");

const MyAwards = props => (
  <View style={styles.container}>
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
    <View style={{ alignItems: "center", marginTop: 80 }}>
      <Image
        source={require("../../assets/images/no_award.png")}
        style={{ width: 80, height: 80, marginBottom: 15 }}
        resizeMode={"contain"}
      />
      <Text style={styles.awardText}>아직 수상한 작품이 없네요</Text>
      <Text style={styles.awardText}>분발하세요</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", marginTop: 30 },
  lines: {
    backgroundColor: "#A2A2A2",
    height: StyleSheet.hairlineWidth,
    width: width / 2 - 60
  },

  lineText: {
    fontFamily: "noto-sans-bold",
    fontSize: 16,
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

export default MyAwards;
