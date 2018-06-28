import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CommentsScreen from "./presenter";

class Container extends PureComponent {
  state = {
    comments: null,
    isRefreshing: false,
    myComment: null
  };

  static propTypes = {};

  componentDidMount = async () => {
    const { getComments } = this.props;
    const commentsResult = await getComments();

    if (commentsResult) {
      this.setState({
        comments: commentsResult
      });
    }
  };

  render() {
    return (
      <CommentsScreen
        {...this.props.navigation.state.params}
        {...this.state}
        onRefresh={this._onRefresh}
        onCommentChange={this._onCommentChange}
        submitComment={this._submitComment}
      />
    );
  }

  _onCommentChange = text => {
    this.setState({
      myComment: text
    });
    console.log("mycomment", this.state.myComment);
  };

  _submitComment = async () => {
    const { myComment } = this.state;
    const { postComment } = this.props;
    if (myComment) {
      const commentResult = await postComment(myComment);
      if (commentResult) {
        this.setState({
          myComment: null
        });
      }
    }
  };

  _onRefresh = async () => {
    const { getComments } = this.props;
    this.setState({
      isRefreshing: true
    });
    const commentsResult = await getComments();
    if (commentsResult) {
      this.setState({
        comments: commentsResult,
        isRefreshing: false
      });
    }
  };
}

export default Container;
