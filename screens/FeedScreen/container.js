import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { randomImages } from "../../util";

// FlatList는 PureComponent랑???
class Container extends PureComponent {
  state = {
    isRefreshing: false,
    images: randomImages(20)
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
        {...this.state}
        onRefresh={this._onRefresh}
        onEndReached={this._onEndReached}
      />
    );
  }

  _onRefresh = async () => {
    await this.setState({
      isRefreshing: true,
      images: randomImages(20)
    });
    this.setState({
      isRefreshing: false
    });
  };

  _onEndReached = () => {
    this.setState(prevState => {
      images: [...prevState.images, ...randomImages(20)];
    });
  };
}

export default Container;
