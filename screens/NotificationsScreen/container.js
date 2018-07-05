import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationsScreen from "./presenter";

class Container extends Component {
  // notification type : like, comment, report, today's theme, 내 작품 맨 처음 올라갔을 때
  // 누구님이 회원님의 작품을 추천합니다.
  // 누구님이 회원님의 작품에 댓글을 달았습니다.
  // 총 10명의 사용자가 회원님의 사진을 신고하여 작품 검증에 들어갑니다.
  // 오늘의 주제는 무엇입니다! 수상에 도전해보세요!!

  // user, type, my photo id, photoUri

  static defaultProps = {
    // notifications: [
    //   {
    //     id: 1,
    //     creator: { profile_image: "", username: "ben" },
    //     notification_type: "comment",
    //     comment: "오 이거 좋은데",
    //     image: { file: "" }
    //   },
    //   {
    //     id: 2,
    //     creator: { profile_image: "", username: "ben" },
    //     notification_type: "like",
    //     comment: null,
    //     image: { file: "" }
    //   }
    // ]
    notifications: []
  };

  state = {
    isFetching: false
  };
  render() {
    return (
      <NotificationsScreen
        {...this.props}
        {...this.state}
        refresh={this._refresh}
      />
    );
  }

  _refresh = () => {
    console.log("refresh");
  };
}

export default Container;
