import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";

const HomeRoute = createStackNavigator({
  Home: {
    screen: FeedScreen,
    navigationOptions: {
      headerTitle: (
        <Text>
          오늘의 주제:{" "}
          <Text
            style={{
              fontFamily: "noto-sans-bold",
              fontSize: 15
            }}
          >
            음식
          </Text>
        </Text>
      )
    }
  }
});

export default HomeRoute;
