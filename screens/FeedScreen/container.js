import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { randomImages } from "../../util";
import { ImagePicker, Permissions } from "expo";
import { Alert } from "react-native";

// FlatList는 PureComponent랑???
class Container extends PureComponent {
  static propTypes = {
    getFeed: PropTypes.func.isRequired,
    feed: PropTypes.array
  };

  state = {
    isRefreshing: false,
    isScrolling: false,
    // hasCameraRollPermissions: null,
    image: null
  };

  componentDidMount = () => {
    const { getFeed } = this.props;
    getFeed();
  };

  // componentWillReceiveProps = nextProps => {
  //   if (nextProps.images) {
  //     this.setState({
  //       isRefreshing: false
  //     });
  //   }
  // };

  render() {
    return (
      <FeedScreen
        {...this.props}
        {...this.state}
        onRefresh={this._onRefresh}
        onEndReached={this._onEndReached}
        scrollBegin={this._scrollBegin}
        scrollEnd={this._scrollEnd}
        openCameraRoll={this._openCameraRoll}
      />
    );
  }

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
        quality: 0.7
      });
      if (!result.cancelled) {
        // this.setState({ image: result.uri });
        navigate("UploadPhoto", { url: result.uri });
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

  _onRefresh = async () => {
    await this.setState({
      isRefreshing: true
      // images: randomImages(20)
    });
    this.setState({
      isRefreshing: false
    });
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
}

export default Container;
