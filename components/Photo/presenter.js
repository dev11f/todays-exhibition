import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { List, ListItem, Right, Left } from "native-base";
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

    {/* <View style={styles.comments}>
      <View style={styles.comment}>
        <Text style={styles.commentAuthor}>우키우키 </Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.commentPayload}
        >
          연어는 영어로 살몬이 아니라 사몬. l이 묵음임. 더 길게 하면 어떻게
          되는가 줄이 넘어가는가 어떻게 되는건지 보자. 더 길게하면 점점점으로
          가는거라고 볼 수 있는 건가 무조건 길게 하는 더 길게 더 길게 더
          길게길게길게길게
        </Text>
      </View>
    </View> */}
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
    flex: 1.8,
    marginRight: 7,
    marginTop: -25
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
