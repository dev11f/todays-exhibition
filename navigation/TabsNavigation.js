import React from "react";
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
            <Ionicons
              name={focused ? "ios-image" : "ios-image-outline"}
              size={30}
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
            <Ionicons
              name={focused ? "ios-ribbon" : "ios-ribbon-outline"}
              size={30}
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
            <Ionicons
              name={focused ? "ios-heart" : "ios-heart-outline"}
              size={30}
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
            <Ionicons
              name={focused ? "ios-person" : "ios-person-outline"}
              size={30}
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
        // backgroundColor: "#FBFBFB",
        height: 45
      }
    }
  }
);

export default TabsNavigation;
