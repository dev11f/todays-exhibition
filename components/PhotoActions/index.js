import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const PhotoActions = props => (
  <View style={styles.container}>
    <View style={styles.actions}>
      {props.like_flag === 1 ? (
        <TouchableOpacity>
          <View>
            <Image
              source={require("../../assets/images/liked.png")}
              style={{ width: 17, height: 17 }}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <View>
            <Image
              source={require("../../assets/images/like.png")}
              style={{ width: 17, height: 17 }}
            />
          </View>
        </TouchableOpacity>
      )}
      <View style={styles.action}>
        <Text style={styles.number}>{props.likes}</Text>
      </View>
    </View>

    <View style={styles.actions}>
      {props.hate_flag === 1 ? (
        <TouchableOpacity>
          <View>
            <Image
              source={require("../../assets/images/hated.png")}
              style={{ width: 17, height: 17 }}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <View>
            <Image
              source={require("../../assets/images/hate.png")}
              style={{ width: 17, height: 17 }}
            />
          </View>
        </TouchableOpacity>
      )}
      <View style={styles.action}>
        <Text style={styles.number}>{props.hates}</Text>
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
