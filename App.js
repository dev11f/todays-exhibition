import React from "react";
import { AppLoading, Asset, Font } from "expo";
import AppContainer from "./components/AppContainer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux//configureStore";
const { persistor, store } = configureStore();
import { firebaseConfig } from "./constants";
import * as firebase from "firebase";

// store.dispatch({ type: "LOG_OUT" });
// persistor.purge();

// 이걸 켤때마다 해야하나? 로그인페이지에 넣고 로그인할 때만 해두면 안되나
firebase.initializeApp(firebaseConfig);

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
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/noPhoto.jpg"),
        require("./assets/images/photoPlaceholder.png"),
        require("./assets/images/logo.png"),
        require("./assets/images/google.png"),
        require("./assets/images/instagram.png"),
        require("./assets/images/facebook.png"),
        require("./assets/images/kakao.png"),
        require("./assets/introImages/intro1.png"),
        require("./assets/introImages/intro2.png"),
        require("./assets/introImages/intro3.png")
      ]),
      Font.loadAsync({
        "noto-sans-regular": require("./assets/fonts/NotoSansMonoCJKkr-Regular.otf"),
        "noto-sans-bold": require("./assets/fonts/NotoSansCJKkr-Bold.otf")
      })
    ]);
  };

  _handleLoadingError = error => {
    console.error(error);
  };

  _handleFinishLoading = async () => {
    this.setState({
      isLoadingComplete: true
    });
  };
}

export default App;
