import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const PhotoActions = props => (
  <View style={styles.container}>
    <View style={styles.actions}>
      <TouchableOpacity onPressOut={props.handleMyLike}>
        <View>
          <Image
            source={
              props.isLiked === 1
                ? require("../../assets/like_hate/like_active.png")
                : require("../../assets/like_hate/like.png")
            }
            style={{ width: 17, height: 17 }}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.action}>
        <Text style={props.isLiked ? styles.activeNumber : styles.number}>
          {props.totalLikes}
        </Text>
      </View>
    </View>

    <View style={styles.actions}>
      <TouchableOpacity onPressOut={props.handleMyHate}>
        <View>
          <Image
            source={
              props.isHated === 1
                ? require("../../assets/like_hate/hate_active.png")
                : require("../../assets/like_hate/hate.png")
            }
            style={{ width: 17, height: 17 }}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.action}>
        <Text style={props.isHated ? styles.activeNumber : styles.number}>
          {props.totalHates}
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  actions: {
    justifyContent: "center",
    alignItems: "center"
  },
  action: {
    marginTop: 4,
    marginHorizontal: 5
  },
  number: {
    fontSize: 12
  },
  activeNumber: {
    fontSize: 12,
    fontWeight: "800"
  }
});

export default PhotoActions;
