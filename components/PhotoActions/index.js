import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const PhotoActions = props => (
  <View style={styles.container}>
    <View style={styles.actions}>
      <View style={styles.action}>
        <TouchableOpacity>
          <View>
            <Ionicons name={"ios-heart-outline"} size={30} color={"black"} />
          </View>
        </TouchableOpacity>
        <View style={styles.number}>
          <Text>{props.like_count}</Text>
        </View>
      </View>
      <View style={styles.action}>
        <TouchableOpacity>
          <View>
            <Ionicons name={"ios-heart-outline"} size={30} color={"black"} />
          </View>
        </TouchableOpacity>
        <View style={styles.number}>
          <Text>{props.hate_count}</Text>
        </View>
      </View>
      {/* <TouchableOpacity>
        <View style={styles.action}>
          <Ionicons name={"ios-heart-outline"} size={30} color={"black"} />
        </View>
      </TouchableOpacity>
      <Text>{props.like_count}</Text>
      <TouchableOpacity>
        <View style={styles.action}>
          <Ionicons name={"ios-heart-outline"} size={30} color={"black"} />
        </View>
      </TouchableOpacity>
      <Text>{props.hate_count}</Text> */}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  actions: {
    marginHorizontal: 10,
    flexDirection: "row"
    // justifyContent: "center"
  },
  action: {
    flexDirection: "row",
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  number: {
    marginHorizontal: 5
  }
});

export default PhotoActions;
