import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitFeedback: feedback => {
      return dispatch(userActions.submitFeedback(feedback));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
