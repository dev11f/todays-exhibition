import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const PhotoActions = props => (
  <View style={styles.container}>
    <View style={styles.actions}>
      <TouchableOpacity>
        <View>
          <Ionicons name={"ios-heart-outline"} size={17} color={"black"} />
        </View>
      </TouchableOpacity>
      <View style={styles.action}>
        <Text style={styles.number}>{props.like_count}</Text>
      </View>
    </View>

    <View style={styles.actions}>
      <TouchableOpacity>
        <View>
          <Ionicons name={"ios-heart-outline"} size={17} color={"black"} />
        </View>
      </TouchableOpacity>
      <View style={styles.action}>
        <Text style={styles.number}>{props.hate_count}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 10,
    flexDirection: "row"
  },

  actions: {
    flexDirection: "row",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  action: {
    marginHorizontal: 5
  },
  number: {
    fontSize: 12
  }
});

export default PhotoActions;
