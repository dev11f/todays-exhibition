import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";

const Award = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>유병재</Text>
      <Text style={styles.date}>2018년 6월 5일</Text>
    </View>
    <View style={styles.prizeWinners}>
      <View style={styles.prizeWinner}>
        <View>
          <Image source={require("../../assets/images/first.png")} />
        </View>
        <Image
          source={require("../../assets/images/image1.jpeg")}
          style={styles.first}
        />
        <Text style={styles.prizeName}>대상</Text>
      </View>
      <View style={styles.prizeWinner}>
        <Image
          source={require("../../assets/images/image1.jpeg")}
          style={styles.second}
        />
        <Text style={styles.prizeName}>최우수</Text>
      </View>
      <View style={styles.prizeWinner}>
        <Image
          source={require("../../assets/images/image1.jpeg")}
          style={styles.third}
        />
        <Text style={styles.prizeName}>우수</Text>
      </View>
      <View style={styles.prizeWinner}>
        <Image
          source={require("../../assets/images/image1.jpeg")}
          style={styles.fourth}
        />
        <Text style={styles.prizeName2}>특선</Text>
      </View>
      <View style={styles.prizeWinner}>
        <Image
          source={require("../../assets/images/image1.jpeg")}
          style={styles.fifth}
        />
        <Text style={styles.prizeName2}>입선</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    paddingBottom: 10,
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#7f7f7f"
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 10,
    height: 50,
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  title: {
    fontFamily: "noto-sans-bold",
    fontSize: 25
  },
  date: { fontSize: 12 },
  prizeWinners: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline"
  },
  prizeWinner: {
    alignItems: "center"
  },
  prizeName: {
    marginTop: 5,
    fontSize: 11,
    fontFamily: "noto-sans-bold"
  },
  prizeName2: {
    marginTop: 5,
    fontSize: 11,
    fontFamily: "noto-sans-regular"
  },
  first: {
    width: 100,
    height: 100
  },
  second: {
    width: 80,
    height: 80
  },
  third: {
    width: 60,
    height: 60
  },
  fourth: {
    width: 40,
    height: 40
  },
  fifth: {
    width: 20,
    height: 20
  }
});

export default Award;
