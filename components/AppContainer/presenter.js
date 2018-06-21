import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet, Dimensions } from "react-native";
import RootNavigation from "../../navigation/RootNavigation";
import CheckProfileScreen from "../../screens/CheckProfileScreen";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import AppIntroSlider from "react-native-app-intro-slider";
const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: "intro1",
    image: require("../../assets/introImages/intro_1.png"),
    imageStyle: { width, resizeMode: "contain" },
    backgroundColor: "#e1e3e5"
  },
  {
    key: "intro2",
    image: require("../../assets/introImages/intro_2.png"),
    imageStyle: { width, resizeMode: "contain" },
    backgroundColor: "#e1e3e5"
  },
  {
    key: "intro3",
    image: require("../../assets/introImages/intro_3.png"),
    imageStyle: { width, resizeMode: "contain" },
    backgroundColor: "#e1e3e5"
  }
];

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    isFirstLogin: PropTypes.bool.isRequired,
    isFirstLaunch: PropTypes.bool.isRequired,
    firstLaunch: PropTypes.func.isRequired,
    getTheme: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { isLoggedIn, getTheme } = this.props;
    if (isLoggedIn) {
      // initApp() : 여러가지 데이터 불러오기
    }
    getTheme();
  }

  render() {
    const {
      isLoggedIn,
      isFirstLogin,
      isFirstLaunch,
      profile,
      theme
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn ? (
          isFirstLogin ? (
            <CheckProfileScreen />
          ) : (
            <RootNavigation screenProps={{ theme }} />
          )
        ) : isFirstLaunch ? (
          <AppIntroSlider
            slides={slides}
            onDone={this._onDone}
            renderNextButton={() => {
              return null;
            }}
            doneLabel={"입장"}
          />
        ) : (
          <LoggedOutNavigation />
        )}
      </View>
    );
  }

  _onDone = () => {
    const { firstLaunch, isFirstLaunch } = this.props;
    firstLaunch();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default AppContainer;
