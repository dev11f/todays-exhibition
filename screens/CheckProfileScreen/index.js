import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules//user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    firstLogin: () => {
      return dispatch(userActions.firstLogin());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
