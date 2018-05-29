import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import PropTypes from "prop-types";
import ActionButton from "react-native-action-button";
import Ionicons from "react-native-vector-icons/Ionicons";
import Photo from "../../components/Photo";

const FeedScreen = props => (
  <View style={styles.container}>
    <FlatList
      data={props.images}
      initialNumToRender={20}
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
        title={"카메라"}
        onPress={() => {
          console.log("카메라");
        }}
      >
        <Ionicons name={"md-camera"} style={styles.actionBtnIcon} />
      </ActionButton.Item>
      <ActionButton.Item
        title={"앨범"}
        onPress={() => {
          console.log("앨범");
        }}
      >
        <Ionicons name={"md-film"} style={styles.actionBtnIcon} />
      </ActionButton.Item>
    </ActionButton>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
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
