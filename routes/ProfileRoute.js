import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import BackButton from "../components/BackButton";

const ProfileRoute = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ focused, navigation }) => ({
      headerTitle: (
        <Text
          style={{
            fontFamily: "noto-sans-bold",
            fontSize: 15
          }}
        >
          내 정보
        </Text>
      ),
      headerRight: (
        <TouchableOpacity onPressOut={() => navigation.navigate("Settings")}>
          <View>
            <Image
              source={require("../assets/images/setting.png")}
              style={{ paddingHorizontal: 25, width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
      )
    })
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      headerLeft: props => <BackButton {...props} />,

      headerTitle: <Text>설정</Text>
    }
  }
});

export default ProfileRoute;
