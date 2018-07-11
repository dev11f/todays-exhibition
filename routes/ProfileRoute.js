import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FeedbackScreen from "../screens/FeedbackSreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import BackButton from "../components/BackButton";

const styles = StyleSheet.create({
  title: {
    fontFamily: "noto-sans-bold",
    fontSize: 15
  }
});

const ProfileRoute = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    path: "/",
    navigationOptions: ({ focused, navigation }) => ({
      headerTitle: <Text style={styles.title}>내 정보</Text>,
      headerRight: (
        <TouchableOpacity onPressOut={() => navigation.navigate("Settings")}>
          <View>
            <Image
              source={require("../assets/navigationbar/setting.png")}
              style={{
                marginHorizontal: 15,
                marginVertical: 20,
                width: 20,
                height: 20
              }}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
      )
    })
  },

  Settings: {
    screen: SettingsScreen,
    path: "/settings",
    navigationOptions: {
      headerLeft: props => <BackButton {...props} />,
      headerTitle: <Text style={styles.title}>설정</Text>
    }
  },

  Feedback: {
    screen: FeedbackScreen,
    path: "/feedback",
    navigationOptions: {
      headerLeft: props => <BackButton {...props} />,
      headerTitle: <Text style={styles.title}>피드백</Text>
    }
  }
});

export default ProfileRoute;
