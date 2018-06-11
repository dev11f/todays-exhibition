// Imports
import { FB_APP_ID } from "../../constants";
import { Facebook, Google } from "expo";
import { AsyncStorage } from "react-native";
import * as firebase from "firebase";

// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const FIRST_LAUNCH = "FIRST_LAUNCH";

// Actions Creators

function firstLaunch() {
  return {
    type: FIRST_LAUNCH
  };
}

// API Actions
function facebookLogin() {
  return async dispatch => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FB_APP_ID,
      {
        permissions: ["public_profile", "email"]
      }
    );
    if (type === "success") {
      // Build Firebase credential with the Facebook access token
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      console.log("facebook token", token);

      // Sign in with credential from the Facebook user
      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(result => console.log("facebook login result", result))
        .catch(error => console.log("facebook login error", error));
    }
  };
}

function googleLogin() {
  return async dispatch => {
    const result = await Google.logInAsync({
      androidClientId:
        "1074458220768-5ipus17vbiq54pv99j5injuqq7324ee1.apps.googleusercontent.com",
      iosClientId:
        "1074458220768-rne40k2ml9s76c3sm6qpgb0vu67cb3jr.apps.googleusercontent.com",

      scopes: ["profile", "email"]
    });

    if (result.type === "success") {
      // console.log("google success", result);
      const credential = firebase.auth.GoogleAuthProvider.credential(
        result.idToken
      );

      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(result => console.log("google login result", result))
        .catch(error => console.log("google login error", error));
    }
  };
}

// Initial State
const initialState = { isLoggedIn: false, isFirstLaunch: true };

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_OUT:
      return applyLogOut(state, action);
    case FIRST_LAUNCH:
      return applyFirstLaunch(state, action);
    default:
      return state;
  }
}

// Reducer Actions
function applyLogOut(state, action) {
  AsyncStorage.clear();
  console.log("LOGOUTTT");
  return {
    ...state,
    isLoggedIn: false,
    token: ""
  };
}

function applyFirstLaunch(state, action) {
  return {
    ...state,
    isFirstLaunch: false
  };
}
// Exports

const actionCreators = {
  facebookLogin,
  googleLogin,
  firstLaunch
};

export { actionCreators };

// Default Reducer Export
export default reducer;
