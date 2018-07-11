import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Dimensions,
  Image
} from "react-native";
import PropTypes from "prop-types";
import ActionButton from "react-native-action-button";
import Photo from "../../components/Photo";
import FeedHeader from "../../components/FeedHeader";
const { width, height } = Dimensions.get("window");

const FeedScreen = props => (
  <View style={styles.container}>
    <FlatList
      data={props.feed}
      initialNumToRender={2}
      refreshing={props.isRefreshing}
      onRefresh={props.onRefresh}
      onEndReachedThreshold={1}
      onEndReached={props.onEndReached}
      ListHeaderComponent={
        <FeedHeader
          sortingBy={props.sortingBy}
          sortByLikes={props.sortByLikes}
          sortByTime={props.sortByTime}
        />
      }
      ListEmptyComponent={
        <View style={styles.noFeed}>
          <Image
            source={require("../../assets/empty/no_feed.png")}
            style={styles.noFeedIcon}
            resizeMode={"contain"}
          />
          <Text style={styles.noFeedText1}>아직 출품된 작품이 없습니다. </Text>
          <Text style={styles.noFeedText2}>
            첫 번째 출품의 기회를 노리세요!
          </Text>
        </View>
      }
      renderItem={({ item, index }) => {
        return <Photo {...item} />;
      }}
      keyExtractor={item => item.id.toString()}
      onMomentumScrollBegin={() => props.scrollBegin()}
      onMomentumScrollEnd={() => props.scrollEnd()}
    />

    {/* FAB */}

    {props.isScrolling ? (
      <View />
    ) : (
      <ActionButton offsetX={15} offsetY={15}>
        <ActionButton.Item
          onPress={() => {
            props.navigation.navigate("Camera");
          }}
          buttonColor="white"
        >
          <Image
            source={require("../../assets/camera/camera.png")}
            style={{ width: 22, height: 22 }}
          />
        </ActionButton.Item>
        <ActionButton.Item onPress={props.openCameraRoll} buttonColor="white">
          <Image
            source={require("../../assets/camera/album.png")}
            style={{ width: 22, height: 22 }}
          />
        </ActionButton.Item>
      </ActionButton>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
    // alignSelf: "center"
  },
  // actionBtn: {
  //   offsetX: 30
  // },
  actionBtnIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  },

  noFeed: {
    // 왜 나누기 4를 해야하는거지
    marginTop: height / 4,
    justifyContent: "center",
    alignItems: "center"
  },
  noFeedIcon: {
    width: 80,
    height: 80
  },
  noFeedText1: {
    marginTop: 20,
    fontSize: 14,
    color: "#cccccc"
  },
  noFeedText2: {
    marginTop: 3,
    fontSize: 14,
    color: "#cccccc"
  }
});

FeedScreen.propTypes = {
  isRefreshing: PropTypes.bool.isRequired,
  isScrolling: PropTypes.bool.isRequired,
  images: PropTypes.array,
  onRefresh: PropTypes.func.isRequired,
  onEndReached: PropTypes.func.isRequired
};

export default FeedScreen;
