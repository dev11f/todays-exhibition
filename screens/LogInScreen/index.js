import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fbLogin: () => {
      return dispatch(userActions.facebookLogin());
    },
    googleLogin: () => {
      return dispatch(userActions.googleLogin());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
