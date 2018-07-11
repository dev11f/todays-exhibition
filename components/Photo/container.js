import React, { PureComponent } from "react";
import { Text, Alert } from "react-native";
import PropTypes from "prop-types";
import Photo from "./presenter";

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: props.like_flag,
      isHated: props.hate_flag,
      totalLikes: props.likes,
      totalHates: props.hates
    };
  }
  render() {
    return (
      <Photo
        {...this.state}
        {...this.props}
        handleMyLike={this._handleMyLike}
        handleMyHate={this._handleMyHate}
      />
    );
  }

  _handleMyLike = () => {
    const { isLiked, isHated, totalLikes } = this.state;
    const { handleMyLike } = this.props;
    if (isLiked === 1) {
      this.setState({
        isLiked: 0,
        totalLikes: totalLikes - 1
      });
      handleMyLike();
    } else if (isLiked === 0) {
      if (isHated === 1) {
        Alert.alert("이미 비추천을 하신 경우에는, 추천을 하실 수 없습니다");
      } else if (isHated === 0) {
        this.setState({
          isLiked: 1,
          totalLikes: totalLikes + 1
        });
        handleMyLike();
      }
    }
  };

  _handleMyHate = () => {
    const { isHated, isLiked, totalHates } = this.state;
    const { handleMyHate } = this.props;
    if (isHated === 1) {
      this.setState({
        isHated: 0,
        totalHates: totalHates - 1
      });
      handleMyHate();
    } else if (isHated === 0) {
      if (isLiked === 1) {
        Alert.alert("이미 추천을 하신 경우에는, 비추천을 하실 수 없습니다");
      } else if (isLiked === 0) {
        this.setState({
          isHated: 1,
          totalHates: totalHates + 1
        });
        handleMyHate();
      }
    }
  };
}

export default Container;
