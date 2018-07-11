import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import TabsNavigation from "./TabsNavigation";
import CameraScreen from "../screens/CameraScreen";
import UploadScreen from "../screens/UploadScreen";
import BackButton from "../components/BackButton";

const RootNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigation,
      path: "/",
      navigationOptions: {
        header: null
      }
    },
    Camera: {
      screen: CameraScreen,
      path: "/camera",
      navigationOptions: {
        header: null
      }
    },
    UploadPhoto: {
      screen: UploadScreen,
      path: "/uploadphoto",
      navigationOptions: {
        headerLeft: props => <BackButton {...props} />,
        headerTitle: (
          <Text style={{ fontFamily: "noto-sans-bold", fontSize: 15 }}>
            출품하기
          </Text>
        )
      }
    }
  },
  {
    mode: "modal"
  }
);

export default RootNavigation;
