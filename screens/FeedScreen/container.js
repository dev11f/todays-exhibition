import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { randomImages } from "../../util";

// FlatList는 PureComponent랑???
class Container extends PureComponent {
  state = {
    isRefreshing: false,
    isScrolling: false,
    // images: randomImages(20)
    images: [
      {
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg",
        comment_count: 685,
        hate_count: 933,
        image: require("../../assets/images/image1.jpeg"),
        key: "9e74927a-792f-4eb5-8479-a3b00ea73a40",
        like_count: 328,
        timestamp: 223,
        title: "작품명이 무엇일까 가나다라마바사하하하하",
        username: "제이름은 열자입니다",
        comments: [
          {
            id: 1,
            username: "우키",
            comment: "연어는 영어로 사아아몬"
          },
          {
            id: 2,
            username: "민서",
            comment: "PS는 알고보면 라틴어"
          },
          {
            id: 3,
            username: "호진",
            commnet: "와플은 영어로도 와플"
          }
        ]
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
        title: "Principal",
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
