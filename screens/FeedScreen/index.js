import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const { photos } = state;

  return { feedByLike: photos.feedByLike, feedByTime: photos.feedByTime };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeedByLike: () => {
      dispatch(photoActions.getFeedByLike());
    },
    getFeedByTime: () => {
      dispatch(photoActions.getFeedByTime());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
