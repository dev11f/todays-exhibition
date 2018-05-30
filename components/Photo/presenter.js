import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";
import FadeIn from "react-native-fade-in-image";
import Description from "../Description";
import PhotoActions from "../PhotoActions";
const { width, height } = Dimensions.get("window");

const Photo = props => (
  <View style={styles.photo}>
    {/* <View style={styles.outerframe}> */}
    <View style={styles.innerframe}>
      <FadeIn>
        <Image
          source={props.image}
          defaultSource={require("../../assets/images/photoPlaceholder.png")}
          style={styles.image}
        />
      </FadeIn>
    </View>
    {/* </View> */}

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
    <View>
      <Text>안녕 난 코멘트야</Text>
    </View>
  </View>
);

// 사진
// 추천, 비추천, 추천수, 비추천수
// 댓글

// 만들어진 시간??
// 작가명, 작품명

const styles = StyleSheet.create({
  photo: {
    width: width - 10,
    marginHorizontal: 5,
    marginBottom: 10,
    alignSelf: "center"
    // justifyContent: "space-between"
  },
  photoMeta: {
    marginTop: 5,
    flexDirection: "row"
    // justifyContent: "space-between"
  },
  outerframe: {
    borderWidth: 10,
    borderColor: "black"
  },
  innerframe: {
    width: width - 30,
    borderWidth: 20,
    borderColor: "white"
  },
  image: {
    width: width - 50,
    height: 300,
    alignSelf: "center"
  },
  description: {
    // width: 200
    flex: 1
  },
  photoActions: {
    // width:x 100
    flex: 1
  }
});

Photo.propTypes = {};

export default Photo;
