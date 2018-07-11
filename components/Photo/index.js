import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    handleMyLike: () => {
      return dispatch(photoActions.handleMyLike(id));
    },
    handleMyHate: () => {
      return dispatch(photoActions.handleMyHate(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
