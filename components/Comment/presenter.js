import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import PropTypes from "prop-types";
const { width } = Dimensions.get("window");

const Comment = props => (
  <View style={styles.container}>
    <View style={styles.commentsContainer}>
      <Text style={styles.commentAuthor}>
        {props.nickname}
        {"   "}
        <Text style={styles.comment}>{props.comment}</Text>
      </Text>
    </View>

    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
        onPressOut={props.likeComment}
      >
        <View>
          <Image
            source={
              props.isLiked
                ? require("../../assets/like_hate/like_active.png")
                : require("../../assets/like_hate/like.png")
            }
            style={{ width: 17, height: 17 }}
          />
        </View>

        <View style={styles.action}>
          <Text style={props.isLiked ? styles.activeNumber : styles.number}>
            {props.totalLikes}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: width,
    // alignSelf: "center"
    borderBottomWidth: 4,
    borderColor: "#e3e3e3",
    minHeight: 60
  },
  commentsContainer: {
    flex: 8,
    justifyContent: "center"
  },
  commentAuthor: {
    fontWeight: "800",
    padding: 15
  },
  comment: {
    fontWeight: "400"
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // marginRight: 3
  },
  action: {
    marginTop: 4
    // marginHorizontal: 5
  },
  number: {
    fontSize: 12
  },
  activeNumber: {
    fontSize: 12,
    fontWeight: "800"
  }
});

Comment.propTypes = {};

export default Comment;
