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
      navigationOptions: {
        header: null
      }
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        header: null
      }
    },
    UploadPhoto: {
      screen: UploadScreen,
      navigationOptions: {
        headerLeft: props => <BackButton {...props} />,

        headerTitle: (
          <Text style={{ fontFamily: "noto-sans-bold", fontSize: 15 }}>
            출품하기
          </Text>
        )
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
