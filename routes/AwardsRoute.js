import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import AwardsScreen from "../screens/AwardsScreen";

const AwardsRoute = createStackNavigator({
  Awards: {
    screen: AwardsScreen,
    navigationOptions: {
      headerTitle: <Text>어워드</Text>
    }
  }
});

export default AwardsRoute;