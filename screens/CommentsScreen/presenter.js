import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  FlatList,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import FitImage from "react-native-fit-image";
import FadeIn from "react-native-fade-in-image";
import PropTypes from "prop-types";
import Description from "../../components/Description";
import PhotoActions from "../../components/PhotoActions";
import Comment from "../../components/Comment";
import KeyboardSpacer from "react-native-keyboard-spacer";

const { width, height } = Dimensions.get("window");

const CommentsScreen = props => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.comments}
        initialNumToRender={4}
        refreshing={props.isRefreshing}
        onRefresh={props.onRefresh}
        onEndReachedThreshold={1}
        onEndReached={props.onEndReached}
        ListHeaderComponent={
          <View>
            <View style={styles.imageContainer}>
              <FadeIn>
                <Image
                  source={
                    props.content
                      ? { uri: props.content }
                      : require("../../assets/images/photoPlaceholder.png")
                  }
                  style={{ width: width, height: width }}
                />
              </FadeIn>
            </View>

            <View style={styles.photoMeta}>
              <View style={styles.photoActions}>
                <PhotoActions
                  totalLikes={props.totalLikes}
                  totalHates={props.totalHates}
                  isLiked={props.isLiked}
                  isHated={props.isHated}
                />
              </View>
              <View style={styles.description}>
                <Description title={props.title} username={props.nickname} />
              </View>
            </View>
          </View>
        }
        renderItem={({ item, index }) => {
          return <Comment {...item} />;
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>

    <View style={styles.commentInputContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          value={props.myComment}
          style={styles.textInput}
          placeholder={"감상평을 남겨주세요"}
          multiline={true}
          underlineColorAndroid={"transparent"}
          onChangeText={props.onCommentChange}
          enablesReturnKeyAutomatically={true}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPressOut={props.submitComment}>
          <View style={styles.button}>
            <Text style={styles.btnText}>작성</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <KeyboardSpacer />
  </View>
);
CommentsScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
  commentInputContainer: {
    alignSelf: "flex-end",
    backgroundColor: "white",
    flexDirection: "row",
    maxHeight: 100
  },
  textInputContainer: {
    backgroundColor: "#f6f6f6",
    borderRadius: 20,
    flex: 5.5,
    borderWidth: 0.3,
    borderColor: "#979797",
    justifyContent: "center",
    margin: 10,
    marginRight: 0
  },
  textInput: {
    marginHorizontal: 10,
    marginVertical: 3
  },
  btnContainer: { flex: 1, margin: 10 },
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    width: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    color: "white",
    fontSize: 12,
    fontFamily: "noto-sans-bold"
  }
});

export default CommentsScreen;
