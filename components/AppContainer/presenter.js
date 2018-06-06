import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet, Dimensions } from "react-native";
import RootNavigation from "../../navigation/RootNavigation";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import AppIntroSlider from "react-native-app-intro-slider";
const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: "intro1",
    image: require("../../assets/introImages/intro1.png"),
    imageStyle: { width, resizeMode: "contain" },
    backgroundColor: "#e1e3e5"
  },
  {
    key: "intro2",
    image: require("../../assets/introImages/intro2.png"),
    imageStyle: { width, resizeMode: "contain" },
    backgroundColor: "#e1e3e5"
  },
  {
    key: "intro3",
    image: require("../../assets/introImages/intro3.png"),
    imageStyle: { width, resizeMode: "contain" },
    backgroundColor: "#e1e3e5"
  }
];

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    isFirstLaunch: PropTypes.bool.isRequired,
    firstLaunch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      // initApp() : 여러가지 데이터 불러오기
    }
  }
  _onDone = () => {
    const { firstLaunch, isFirstLaunch } = this.props;
    firstLaunch();
    console.log("isFirstLauch", isFirstLaunch);
  };

  render() {
    console.log("넓이", width);
    const { isLoggedIn, isFirstLaunch, profile } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {!isLoggedIn ? (
          <RootNavigation />
        ) : isFirstLaunch ? (
          <AppIntroSlider
            slides={slides}
            onDone={this._onDone}
            renderNextButton={() => {
              return null;
            }}
          />
        ) : (
          <LoggedOutNavigation />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default AppContainer;
