import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileRoute = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ focused, navigation }) => ({
      headerTitle: <Text>내 소개</Text>,
      headerRight: (
        <Ionicons
          name={"ios-settings"}
          size={30}
          onPress={() => navigation.navigate("Settings")}
          style={{ paddingHorizontal: 20 }}
        />
      )
    })
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTitle: <Text>설정</Text>
    }
  }
});

export default ProfileRoute;
