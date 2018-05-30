import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { randomImages } from "../../util";

// FlatList는 PureComponent랑???
class Container extends PureComponent {
  state = {
    isRefreshing: false,
    // images: randomImages(20)
    images: [
      {
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg",
        comment_count: 6185,
        hate_count: 935,
        image: require("../../assets/images/image1.jpeg"),
        key: "9e74927a-792f-4eb5-8479-a3b00ea73a40",
        like_count: 368,
        timestamp: 223,
        title: "안녕하세요 저는 작품입니다. 하이하이하.",
        username: "제이름은 열자입니다"
      },
      {
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/heykenneth/128.jpg",
        comment_count: 62014,
        hate_count: 611,
        image: require("../../assets/images/image2.jpeg"),
        key: "7aaf983f-8d65-4423-a7fb-264404190b5a",
        like_count: 206,
        timestamp: 201,
        title: "Principal Response Agent",
        username: "America"
      }
    ]
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
}

export default Container;