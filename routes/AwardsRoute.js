import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import AwardsScreen from "../screens/AwardsScreen";

const AwardsRoute = createStackNavigator({
  Awards: {
    screen: AwardsScreen,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            fontFamily: "noto-sans-bold",
            fontSize: 15
          }}
        >
          명예의 전당
        </Text>
      )
    }
  }
});
export default AwardsRoute;
