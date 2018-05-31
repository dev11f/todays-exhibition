import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";

const Award = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>"유병재"</Text>
      <Text>2018.5.28</Text>
    </View>
    <View style={styles.prizeWinners}>
      <View style={styles.prizeWinner}>
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
        <Text style={styles.prizeName}>특선</Text>
      </View>
      <View style={styles.prizeWinner}>
        <Image
          source={require("../../assets/images/image1.jpeg")}
          style={styles.fifth}
        />
        <Text style={styles.prizeName}>입선</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#7f7f7f"
  },
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontFamily: "noto-sans-bold",
    fontSize: 20
  },
  prizeWinners: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  prizeWinner: {
    alignItems: "center"
  },
  prizeName: {
    marginTop: 5,
    fontSize: 12
  },
  first: {
    width: 100,
    height: 100
  },
  second: {
    width: 75,
    height: 75
  },
  third: {
    width: 50,
    height: 50
  },
  fourth: {
    width: 25,
    height: 25
  },
  fifth: {
    width: 10,
    height: 10
  }
});

export default Award;
