import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Platform
} from "react-native";
import { List, ListItem, Right, Left } from "native-base";
import PropTypes from "prop-types";
import FadeIn from "react-native-fade-in-image";
import Description from "../Description";
import PhotoActions from "../PhotoActions";
const { width, height } = Dimensions.get("window");

const Photo = props => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      {/* <FadeIn> */}
      <Image
        source={
          props.content
            ? { uri: props.content }
            : require("../../assets/images/photoPlaceholder.png")
        }
        // defaultSource={require("../../assets/images/photoPlaceholder.png")}
        style={styles.image}
        borderWidth={StyleSheet.hairlineWidth}
        resizeMode={"contain"}
      />
      {/* </FadeIn> */}
    </View>
    <View style={styles.photoMeta}>
      <View style={styles.photoActions}>
        <PhotoActions like_count={props.likes} hate_count={props.hates} />
      </View>
      <View style={styles.description}>
        <Description title={props.title} username={props.nickname} />
      </View>
    </View>

    <View style={styles.comments}>
      <List>
        <ListItem>
          <Text style={styles.commentAuthor}>
            {`우키쿠키  `}
            <Text style={styles.comment}>
              동물 환생 학교 짱 살몬에서 l은 묵음. 연어는 사에몬.
            </Text>
          </Text>
        </ListItem>
        <ListItem>
          <Text
            style={styles.commentAuthor}
            numberOfLines={2}
            ellipsizeMode={"tail"}
          >
            {`민서민서민서  `}
            <Text style={styles.comment}>
              동물 환생 학교 짱 살몬에서 l은 묵음. 연어는 사에몬. 내가 엄청 길게
              쓰면 어떻게 될까. 두 줄까지는 넘어가고 그 다음에 넘어가면은
              점점점으로 해야한다. 그렇게 해야 UI가 괜찮아보이니까
            </Text>
          </Text>
        </ListItem>
        <ListItem>
          <Text style={styles.commentAuthor}>
            {`호진  `}
            <Text style={styles.comment}>와플은 와플</Text>
          </Text>
        </ListItem>
      </List>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 1
    // alignSelf: "center"
    // overflow: "hidden"
    // width: width - 60,
    // height: 500
  },

  image: {
    flex: 1,
    alignSelf: "center",
    width: width - 60,
    height: 300
    // resizeMode: "contain"

    // ...Platform.select({
    //   ios: {
    //     shadowColor: "rgb(50, 50, 50)",
    //     shadowOpacity: 0.5,
    //     shadowRadius: 5,
    //     shadowOffset: {
    //       height: 2,
    //       width: 0
    //     }
    //   },
    //   android: {
    //     elevation: 3
    //   }
    // })
  },
  photoMeta: {
    marginTop: 5,
    flexDirection: "row"
  },
  photoActions: {
    flex: 1
  },
  description: {
    flex: 1.8,
    marginRight: 7,
    marginTop: -40
  },
  comments: {
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 5,
    justifyContent: "center"

    // alignItems: "center"
  },
  comment: {
    fontWeight: "400"
  },
  commentAuthor: {
    fontWeight: "800"
  }
});

Photo.propTypes = {};

export default Photo;
