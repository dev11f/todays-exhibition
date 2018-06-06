import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import TabsNavigation from "./TabsNavigation";
import CameraScreen from "../screens/CameraScreen";

const RootNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigation,
      navigationOptions: {
        header: null
      }
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        header: null
      }
    }

    // UploadPhoto: {
    //   screen: UploadPhotoScreen,
    //   navigationOptions: ({ navigation }) => ({
    //     title: "Upload Photo",
    //     headerLeft: (
    //       <Button
    //         title="Cancel"
    //         color="black"
    //         onPress={() => navigation.goBack(null)}
    //       />
    //     )
    //   })
    // }
  },
  {
    mode: "modal"
  }
);

export default RootNavigation;
