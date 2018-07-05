import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { List, ListItem, Right, Left } from "native-base";
import PropTypes from "prop-types";
import FadeIn from "react-native-fade-in-image";
import Description from "../Description";
import PhotoActions from "../PhotoActions";
import { withNavigation } from "react-navigation";
const { width, height } = Dimensions.get("window");

const Photo = props => (
  <View style={styles.container}>
    <TouchableWithoutFeedback
      onPress={event => {
        event.stopPropagation();
        props.navigation.navigate("Comments", {
          photoId: props.id,
          content: props.content,
          title: props.title,
          nickname: props.nickname
        });
      }}
    >
      <View style={styles.imageContainer}>
        <FadeIn>
          <Image
            source={
              props.content
                ? { uri: props.content }
                : require("../../assets/images/photoPlaceholder.png")
            }
            style={{ width: width - 54, height: width - 54 }}
          />
        </FadeIn>
      </View>
    </TouchableWithoutFeedback>

    <View style={styles.photoMeta}>
      <View style={styles.photoActions}>
        <PhotoActions
          id={props.id}
          like_flag={props.like_flag}
          hate_flag={props.hate_flag}
          likes={props.likes}
          hates={props.hates}
        />
      </View>
      <View style={styles.description}>
        <Description title={props.title} username={props.nickname} />
      </View>
    </View>

    {props.comments ? (
      <View
        style={styles.comments}
        onPressOut={() => props.navigation.navigate("Comments")}
      >
        <List>
          {props.comments.map(comment => (
            <ListItem key={comment.id}>
              <Text style={styles.commentAuthor}>
                {comment.nickname}{" "}
                <Text style={styles.comment}>{comment.comment}</Text>
              </Text>
            </ListItem>
          ))}
        </List>
      </View>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 15,
    alignSelf: "center"
  },
  imageContainer: {
    flex: 1,
    alignSelf: "center",
    // overflow: "hidden"
    width: width - 30,
    borderWidth: 12,
    borderColor: "#f9f9f9",
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
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
    marginRight: 0,
    marginTop: -40
  },
  comments: {
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 5,
    justifyContent: "center"
  },
  comment: {
    fontWeight: "400"
  },
  commentAuthor: {
    fontWeight: "800"
  }
});

Photo.propTypes = {
  // photo data object 다 작성
};

export default withNavigation(Photo);
