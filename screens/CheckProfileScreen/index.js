import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules//user";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { profile }
  } = state;
  return { profile };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    firstLogin: () => {
      return dispatch(userActions.firstLogin());
    },
    updateProfile: (avatar, username) => {
      return dispatch(userActions.updateProfile(avatar, username));
    },
    updateNickname: username => {
      return dispatch(userActions.updateNickname(username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
