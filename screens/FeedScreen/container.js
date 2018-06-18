import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { randomImages } from "../../util";
import { ImagePicker, Permissions } from "expo";

// FlatList는 PureComponent랑???
class Container extends PureComponent {
  static propTypes = {
    getFeed: PropTypes.func.isRequired,
    feed: PropTypes.array
  };

  state = {
    isRefreshing: false,
    isScrolling: false,
    hasCameraRollPermissions: null,
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
    const { hasCameraRollPermissions, image } = this.state;
    const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({
      hasCameraRollPermissions: cameraRoll.status === "granted"
    });

    if (hasCameraRollPermissions === false) {
      Alert.alert("앨범 접근 권한이 없습니다");
    } else if (hasCameraRollPermissions === null) {
      console.log("null");
      return;
    } else if (hasCameraRollPermissions === true) {
      let result = await ImagePicker.launchImageLibraryAsync({
        // allowsEditing: true
        // aspect: [1, 1]
      });

      if (!result.cancelled) {
        // this.setState({ image: result.uri });
        navigate("UploadPhoto", { url: result.uri });
      }
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
