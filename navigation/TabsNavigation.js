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
      path: "/",
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../assets/tabbar/feed_active.png")
                  : require("../assets/tabbar/feed.png")
              }
              style={{ width: 22, height: 22 }}
              resizeMode={"contain"}
            />
          );
        }
      }
    },
    Awards: {
      screen: AwardsRoute,
      path: "/awards",
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../assets/tabbar/awards_active.png")
                  : require("../assets/tabbar/awards.png")
              }
              style={{ width: 22, height: 26 }}
              resizeMode={"contain"}
            />
          );
        }
      }
    },
    Notifications: {
      screen: NotificationsRoute,
      path: "/notifications",
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../assets/tabbar/noti_active.png")
                  : require("../assets/tabbar/noti.png")
              }
              style={{ width: 22, height: 26 }}
              resizeMode={"contain"}
            />
          );
        }
      }
    },
    Profile: {
      screen: ProfileRoute,
      path: "/profile",
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../assets/tabbar/my_active.png")
                  : require("../assets/tabbar/my.png")
              }
              style={{ width: 22, height: 22 }}
              resizeMode={"contain"}
            />
          );
        }
      }
    }
  },
  {
    backBehavior: "none",
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
