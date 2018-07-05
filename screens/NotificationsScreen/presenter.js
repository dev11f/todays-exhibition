import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl
} from "react-native";
import PropTypes from "prop-types";
import Notification from "../../components/Notification";

const NotificationsScreen = props => (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={"black"}
      />
    }
  >
    <View style={styles.container}>
      {props.notifications.length === 0 && props.notifications.length > 1 ? (
        <View style={styles.noNoti}>
          <Image
            source={require("../../assets/empty/no_noti.png")}
            style={styles.noNotiIcon}
            resizeMode={"contain"}
          />
          <Text style={styles.noNotiText}>아직 도착한 소식이 없네요 </Text>
        </View>
      ) : (
        props.notifications.map(notification => (
          <Notification key={notification.id} {...notification} />
        ))
      )}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  noNoti: {
    justifyContent: "center",
    alignItems: "center"
  },
  noNotiIcon: {
    width: 80,
    height: 80
  },
  noNotiText: {
    marginTop: 20,
    fontSize: 14,
    color: "#cccccc"
  }
});

NotificationsScreen.propTypes = {};

export default NotificationsScreen;
