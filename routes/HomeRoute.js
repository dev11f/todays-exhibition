import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import CommentsScreen from "../screens/CommentsScreen";
import BackButton from "../components/BackButton";

const HomeRoute = createStackNavigator({
  Home: {
    screen: FeedScreen,
    navigationOptions: ({ screenProps }) => ({
      headerTitle: (
        <Text>
          오늘의 주제:{" "}
          <Text
            style={{
              fontFamily: "noto-sans-bold",
              fontSize: 15
            }}
          >
            {screenProps.theme}
          </Text>
        </Text>
      )
    })
  },
  Comments: {
    screen: CommentsScreen,
    navigationOptions: ({ screenProps }) => ({
      headerLeft: props => <BackButton {...props} />,
      headerTitle: (
        <Text>
          오늘의 주제:{" "}
          <Text
            style={{
              fontFamily: "noto-sans-bold",
              fontSize: 15
            }}
          >
            {screenProps.theme}
          </Text>
        </Text>
      )
    })
  }
});

HomeRoute.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default HomeRoute;
