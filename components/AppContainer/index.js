import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as themeActions } from "../../redux/modules/theme";
import { actionCreators as photosActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const { user, theme, photos } = state;
  // console.log("user redux", user);
  // console.log("photo redux", photos);
  return {
    isLoggedIn: user.isLoggedIn,
    isFirstLogin: user.isFirstLogin,
    isFirstLaunch: user.isFirstLaunch,
    profile: user.profile,
    theme: theme.theme
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    firstLaunch: () => {
      return dispatch(userActions.firstLaunch());
    },
    initApp: () => {
      dispatch(photosActions.getFeed());
    },
    getTheme: () => {
      dispatch(themeActions.getTheme());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
