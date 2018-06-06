import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as userActions } from "../../redux//modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    isFirstLaunch: user.isFirstLaunch,
    profile: user.profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    firstLaunch: () => {
      return dispatch(userActions.firstLaunch());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
