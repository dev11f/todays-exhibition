import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { randomImages } from "../../util";

// FlatList는 PureComponent랑???
class Container extends PureComponent {
  static propTypes = {
    getFeed: PropTypes.func.isRequired,
    feed: PropTypes.array
  };

  state = {
    isRefreshing: false,
    isScrolling: false
    // images: randomImages(20)
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
      />
    );
  }

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
