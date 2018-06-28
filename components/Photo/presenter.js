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
import FitImage from "react-native-fit-image";

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
          nickname: props.nickname,
          totalLikes: props.totalLikes,
          totalHates: props.totalHates,
          isLiked: props.isLiked,
          isHated: props.isHated,
          handleMyLike: props.handleMyLike,
          handleMyHate: props.handleMyHate
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
          totalLikes={props.totalLikes}
          totalHates={props.totalHates}
          isLiked={props.isLiked}
          isHated={props.isHated}
          handleMyLike={props.handleMyLike}
          handleMyHate={props.handleMyHate}
        />
      </View>
      <View style={styles.description}>
        <Description title={props.title} username={props.nickname} />
      </View>
    </View>

    {props.comments ? (
      <View style={styles.comments}>
        <List>
          <ListItem onPressOut={() => props.navigation.navigate("Comments")}>
            <Text style={styles.commentAuthor}>
              {`우키쿠키  `}
              <Text style={styles.comment}>
                동물 환생 학교 짱 살몬에서 l은 묵음. 연어는 사에몬.
              </Text>
            </Text>
          </ListItem>
          <ListItem onPressOut={() => props.navigation.navigate("Comments")}>
            <Text
              style={styles.commentAuthor}
              numberOfLines={2}
              ellipsizeMode={"tail"}
            >
              {`민서민서민서  `}
              <Text style={styles.comment}>
                동물 환생 학교 짱 살몬에서 l은 묵음. 연어는 사에몬. 내가 엄청
                길게 쓰면 어떻게 될까. 두 줄까지는 넘어가고 그 다음에 넘어가면은
                점점점으로 해야한다. 그렇게 해야 UI가 괜찮아보이니까
              </Text>
            </Text>
          </ListItem>
          <ListItem onPressOut={() => props.navigation.navigate("Comments")}>
            <Text style={styles.commentAuthor}>
              {`호진  `}
              <Text style={styles.comment}>와플은 와플</Text>
            </Text>
          </ListItem>
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

export default withNavigation(Photo);
