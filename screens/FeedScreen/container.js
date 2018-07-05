import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { randomImages } from "../../util";
import { ImagePicker, Permissions } from "expo";
import { Alert, PanResponder } from "react-native";
import * as firebase from "firebase";

// FlatList는 PureComponent랑???
class Container extends PureComponent {
  static propTypes = {
    getFeed: PropTypes.func.isRequired,
    feed: PropTypes.array
  };

  state = {
    isRefreshing: false,
    isScrolling: false,
    image: null,
    sortingBy: "likes"
    // likes , time,
  };

  componentWillMount = () => {
    // this._pandResponder = PanResponder.create({
    //   onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    //   onStartShouldSetPanResponderCapture: (evt, gestureState) => true
    // });

    console.log("what time is it now", new Date().getHours());
    if (new Date().getHours() === 11) {
      console.log("It's 11am right now");
    }
  };

  componentDidMount = () => {
    const { getFeed } = this.props;

    getFeed();
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.feed) {
      this.setState({
        isRefreshing: false
      });
    }
  };

  render() {
    return (
      <FeedScreen
        {...this.props}
        {...this.state}
        // {...this._pandResponder.panHandlers}
        onRefresh={this._onRefresh}
        onEndReached={this._onEndReached}
        scrollBegin={this._scrollBegin}
        scrollEnd={this._scrollEnd}
        openCameraRoll={this._openCameraRoll}
        sortByTime={this._sortByTime}
        sortByLikes={this._sortByLikes}
      />
    );
  }

  _onRefresh = async () => {
    const { getFeed } = this.props;
    this.setState({
      isRefreshing: true
    });
    getFeed();
  };

  _onEndReached = () => {
    this.setState(prevState => ({
      // images: [...prevState.images, ...randomImages(10)]
    }));
  };

  _scrollBegin = () => {
    this.setState({
      isScrolling: true
    });
  };

  _scrollEnd = () => {
    this.setState({
      isScrolling: false
    });
  };

  _sortByLikes = () => {
    const { sortingBy } = this.state;
    if (sortingBy !== "likes") {
      this.setState({
        sortingBy: "likes"
      });
    }
  };

  _sortByTime = () => {
    const { sortingBy } = this.state;
    if (sortingBy !== "time") {
      this.setState({
        sortingBy: "time"
      });
    }
  };

  _openCameraRoll = async () => {
    const {
      navigation: { navigate }
    } = this.props;
    const { image } = this.state;

    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
        base64: true
      });
      if (!result.cancelled) {
        // this.setState({ image: result.uri });
        navigate("UploadPhoto", { uri: result.uri, base64: result.base64 });
      }
    } else if (status !== "granted") {
      Alert.alert(
        "앨범 접근 권한이 없습니다. 설정에 가서 앨범 권한을 승인해주세요!"
      );
    } else {
      console.log("status null");
      return;
    }
  };
}

export default Container;
