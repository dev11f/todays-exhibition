import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as themeActions } from "../../redux/modules/theme";
import { actionCreators as photosActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const { user, theme } = state;
  // console.log("user redux", user);
  // console.log("photo redux", photos);
  // console.log("theme redux", theme.themeInfo);
  return {
    isLoggedIn: user.isLoggedIn,
    isFirstLogin: user.isFirstLogin,
    isFirstLaunch: user.isFirstLaunch,
    profile: user.profile,
    theme: theme.themeInfo ? theme.themeInfo.theme_title : theme.themeInfo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    firstLaunch: () => {
      return dispatch(userActions.firstLaunch());
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
