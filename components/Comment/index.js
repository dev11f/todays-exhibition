import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    likeComment: () => {
      return dispatch(photoActions.likeComment(id));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Container);
