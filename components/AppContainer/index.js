import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as themeActions } from "../../redux/modules/theme";

const mapStateToProps = (state, ownProps) => {
  const { user, theme } = state;
  console.log("lnsflknaslkfas", user);
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
    getTheme: () => {
      return dispatch(themeActions.getTheme());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
