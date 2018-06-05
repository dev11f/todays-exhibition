import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator, tabBarOptions } from "react-navigation";
import HomeRoute from "../routes/HomeRoute";
import AwardsRoute from "../routes/AwardsRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";
import Ionicons from "react-native-vector-icons/Ionicons";

const TabsNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../assets/tabIcons/feed_active.png")
                  : require("../assets/tabIcons/feed.png")
              }
              style={{ width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          );
        }
      }
    },
    Awards: {
      screen: AwardsRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../assets/tabIcons/awards_active.png")
                  : require("../assets/tabIcons/awards.png")
              }
              style={{ width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          );
        }
      }
    },
    Notifications: {
      screen: NotificationsRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../assets/tabIcons/noti_active.png")
                  : require("../assets/tabIcons/noti.png")
              }
              style={{ width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          );
        }
      }
    },
    Profile: {
      screen: ProfileRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../assets/tabIcons/my_active.png")
                  : require("../assets/tabIcons/my.png")
              }
              style={{ width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#FBFBFB",
        height: 45
      }
    }
  }
);

export default TabsNavigation;
