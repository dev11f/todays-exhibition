import React from "react";
import { AppLoading, Asset, Font } from "expo";
import AppContainer from "./components/AppContainer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux//configureStore";
const { persistor, store } = configureStore();
import { firebaseConfig, awsConfig } from "./constants";
import * as firebase from "firebase";
import Amplify from "aws-amplify";

// store.dispatch({ type: "LOG_OUT" });
// persistor.purge();

// 이걸 켤때마다 해야하나? 로그인페이지에 넣고 로그인할 때만 해두면 안되나
firebase.initializeApp(firebaseConfig);
Amplify.configure(awsConfig);

class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }

  _loadAssetsAsync = async () => {
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user !== null) {
    //     console.log("user: user");
    //   } else {
    //     console.log("user: null");
    //   }
    // });

    return Promise.all([
      Asset.loadAsync([
        require("./assets/camera/album.png"),
        require("./assets/camera/camchange.png"),
        require("./assets/camera/camera.png"),
        require("./assets/camera/cancel.png"),
        require("./assets/camera/flash_auto.png"),
        require("./assets/camera/flash_off.png"),
        require("./assets/camera/flash_on.png"),
        require("./assets/camera/upload.png"),
        require("./assets/empty/comingsoon.png"),
        require("./assets/empty/no_award.png"),
        require("./assets/empty/no_feed.png"),
        require("./assets/empty/no_noti.png"),
        require("./assets/introImages/intro_1.png"),
        require("./assets/introImages/intro_2.png"),
        require("./assets/introImages/intro_3.png"),
        require("./assets/like_hate/hate_active.png"),
        require("./assets/like_hate/hate.png"),
        require("./assets/like_hate/like_active.png"),
        require("./assets/like_hate/like.png"),
        require("./assets/navigationbar/back.png"),
        require("./assets/navigationbar/ok.png"),
        require("./assets/navigationbar/setting.png"),
        require("./assets/navigationbar/upload.png"),
        require("./assets/tabbar/awards_active.png"),
        require("./assets/tabbar/awards.png"),
        require("./assets/tabbar/feed_active.png"),
        require("./assets/tabbar/feed.png"),
        require("./assets/tabbar/my_active.png"),
        require("./assets/tabbar/my.png"),
        require("./assets/tabbar/noti_active.png"),
        require("./assets/tabbar/noti.png"),
        require("./assets/winner/fifth.png"),
        require("./assets/winner/first.png"),
        require("./assets/winner/fourth.png"),
        require("./assets/winner/second.png"),
        require("./assets/winner/third.png"),
        require("./assets/winner/winner_left.png"),
        require("./assets/winner/winner_right.png"),
        require("./assets/images/arrow.png"),
        require("./assets/images/facebook.png"),
        require("./assets/images/google.png"),
        require("./assets/images/icon.png"),
        require("./assets/images/instagram.png"),
        require("./assets/images/kakao.png"),
        require("./assets/images/logo.png"),
        require("./assets/images/noPhoto.jpg"),
        require("./assets/images/photoPlaceholder.png"),
        require("./assets/images/point.png"),
        require("./assets/images/profileedit.png"),
        require("./assets/images/splash.png")
      ]),
      Font.loadAsync({
        "noto-sans-regular": require("./assets/fonts/NotoSansMonoCJKkr-Regular.otf"),
        "noto-sans-bold": require("./assets/fonts/NotoSansCJKkr-Bold.otf")
      }),
      new Promise(function(resolve, reject) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            resolve("already logged in");
          } else {
            resolve("first login");
          }
        });
      })
    ]);
  };

  _handleLoadingError = error => {
    console.error(error);
  };

  _handleFinishLoading = async () => {
    console.log("app loading done");
    this.setState({
      isLoadingComplete: true
    });
  };
}

export default App;
