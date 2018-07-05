import React, { PureComponent } from "react";
import { Text, Alert } from "react-native";
import PropTypes from "prop-types";
import Comment from "./presenter";

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: props.like_flag,
      totalLikes: props.likes
    };
  }

  render() {
    return (
      <Comment
        {...this.props}
        {...this.state}
        likeComment={this._likeComment}
      />
    );
  }

  _likeComment = () => {
    const { isLiked, totalLikes } = this.state;
    const { likeComment } = this.props;
    if (isLiked === 1) {
      this.setState({
        isLiked: 0,
        totalLikes: totalLikes - 1
      });
      likeComment();
    } else if (isLiked === 0) {
      this.setState({
        isLiked: 1,
        totalLikes: totalLikes + 1
      });
      likeComment();
    }
  };
}

export default Container;
