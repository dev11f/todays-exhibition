import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    navigation: {
      state: {
        params: { photoId }
      }
    }
  } = ownProps;

  return {
    getComments: () => {
      return dispatch(photoActions.getComments(photoId));
    },
    postComment: text => {
      return dispatch(photoActions.uploadComment(photoId, text));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
