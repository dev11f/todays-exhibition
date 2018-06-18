// Imports
import { FB_APP_ID } from "../../constants";
import { Facebook, Google } from "expo";
import { AsyncStorage } from "react-native";
import * as firebase from "firebase";

// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const FIRST_LAUNCH = "FIRST_LAUNCH";
const FIRST_LOGIN = "FIRST_LOGIN";

// Actions Creators

function firstLaunch() {
  return {
    type: FIRST_LAUNCH
  };
}

function firstLogin() {
  return {
    type: FIRST_LOGIN
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

function feedback(feedback) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/images/${photoId}/unlikes/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      },
      body: feedback
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
      } else if (response.ok) {
        return true;
      } else {
        return false;
      }
    });
  };
}

// Initial State
const initialState = {
  isLoggedIn: false,
  isFirstLaunch: true,
  isFirstLogin: true
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_OUT:
      return applyLogOut(state, action);
    case FIRST_LAUNCH:
      return applyFirstLaunch(state, action);
    case FIRST_LOGIN:
      return applyFirstLogin(state, action);
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

function applyFirstLogin(state, action) {
  return {
    ...state,
    isFirstLogin: false
  };
}

// Exports

const actionCreators = {
  facebookLogin,
  googleLogin,
  firstLaunch,
  firstLogin
};

export { actionCreators };

// Default Reducer Export
export default reducer;
