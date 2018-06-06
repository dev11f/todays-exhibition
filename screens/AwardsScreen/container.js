import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Award from "../../components/Award";

class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* 리프레시 기능 넣기 */}
          {/* 수상내역 없을 때 넣기 */}
          <Award />
          <Award />
          <Award />
          <Award />
          <Award />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default Container;
