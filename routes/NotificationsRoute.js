import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import NotificationsScreen from "../screens/NotificationsScreen";

const NotificationsRoute = createStackNavigator({
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            fontFamily: "noto-sans-bold",
            fontSize: 15
          }}
        >
          소식
        </Text>
      )
    }
  }
});

export default NotificationsRoute;
