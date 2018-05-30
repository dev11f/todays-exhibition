import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import ActionButton from "react-native-action-button";
import Ionicons from "react-native-vector-icons/Ionicons";
import Photo from "../../components/Photo";
const { width, height } = Dimensions.get("window");

const FeedScreen = props => (
  <ImageBackground
    source={require("../../assets/images/background.jpg")}
    style={{ width, height, flex: 1, alignSelf: "center" }}
  >
    {/* <View style={styles.container}> */}
    <FlatList
      data={props.images}
      initialNumToRender={2}
      refreshing={props.isRefreshing}
      onRefresh={props.onRefresh}
      onEndReachedThreshold={1}
      onEndReached={props.onEndReached}
      renderItem={({ item }) => {
        return <Photo {...item} key={item.key} />;
      }}
    />

    {/* FAB */}
    <ActionButton offsetX={15} offsetY={15}>
      <ActionButton.Item
        onPress={() => {
          console.log("카메라");
        }}
      >
        <Ionicons name={"md-camera"} style={styles.actionBtnIcon} />
      </ActionButton.Item>
      <ActionButton.Item
        onPress={() => {
          console.log("앨범");
        }}
      >
        <Ionicons name={"md-film"} style={styles.actionBtnIcon} />
      </ActionButton.Item>
    </ActionButton>
    {/* </View> */}
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "white"
    // alignSelf: "center"
  },
  // actionBtn: {
  //   offsetX: 30
  // },
  actionBtnIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});

FeedScreen.propTypes = {
  isRefreshing: PropTypes.bool.isRequired,
  images: PropTypes.array,
  onRefresh: PropTypes.func.isRequired,
  onEndReached: PropTypes.func.isRequired
};

export default FeedScreen;
