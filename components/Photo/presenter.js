import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";
import FadeIn from "react-native-fade-in-image";
import Description from "../Description";
import PhotoActions from "../PhotoActions";
const { width, height } = Dimensions.get("window");

const Photo = props => (
  <View style={styles.photo}>
    <FadeIn>
      <Image
        source={props.image}
        defaultSource={require("../../assets/images/photoPlaceholder.png")}
        style={styles.image}
      />
    </FadeIn>
    <View style={styles.photoMeta}>
      <View style={styles.photoActions}>
        <PhotoActions
          like_count={props.like_count}
          hate_count={props.hate_count}
        />
      </View>
      <View style={styles.description}>
        <Description title={props.title} username={props.username} />
      </View>
    </View>
    <View style={styles.comment}>
      <Text style={styles.commentAuthor}>
        유저1
        <Text style={styles.message}>동해물과 백두산이 마르고 닳도록</Text>
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  photo: {
    width
  },
  image: {
    width
  },
  photoMeta: {
    marginTop: 5,
    flexDirection: "row"
  },
  photoActions: {
    flex: 1
  },
  description: {
    flex: 1.5,
    marginRight: 7,
    marginTop: -25
  },
  comment: {
    // marginTop: 5
  },
  commentAuthor: {
    marginRight: 5,
    fontWeight: "600",
    fontSize: 14
  },
  message: {
    fontWeight: "400",
    fontSize: 15
  }
});

Photo.propTypes = {};

export default Photo;
