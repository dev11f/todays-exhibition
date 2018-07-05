// Imports
import { FB_APP_ID } from "../../constants";
import { Facebook, Google } from "expo";
import { AsyncStorage, Alert } from "react-native";
import { API_URL, S3_URL } from "../../constants";
import * as firebase from "firebase";
import { Storage } from "aws-amplify";
import uuidv1 from "uuid/v1";
import { actionCreators as themeActions } from "./theme";

// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const FIRST_LAUNCH = "FIRST_LAUNCH";
const FIRST_LOGIN = "FIRST_LOGIN";
const SET_USER = "SET_USER";
const UPDATE_USER = "UPDATE_USER";
const UPDATE_USERNAME = "UPDATE_USERNAME";

// Actions Creators

function setLogIn() {
  return {
    type: LOG_IN
  };
}

function logOut() {
  return {
    type: LOG_OUT
  };
}

function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

function updateUser(avatar, username) {
  return {
    type: UPDATE_USER,
    avatar,
    username
  };
}

function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    username
  };
}

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

      // Sign in Firebse with credential from the Facebook user
      return firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(result => {
          return fetch(`${API_URL}/authenticate`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              uid: result.user.uid
            })
          })
            .then(response => response.json())
            .then(json => {
              if (json.user) {
                dispatch(setLogIn());
                dispatch(setUser(json.user));
                dispatch(themeActions.getTheme());
                return true;
              } else {
                return false;
              }
            });
        })
        .catch(error => console.log("facebook login error", error));
    }
  };
}

function googleLogin() {
  return async dispatch => {
    const result = await Google.logInAsync({
      androidClientId:
        // 이건 expo app일 때. android standalone app이 아니라
        // "1074458220768-5ipus17vbiq54pv99j5injuqq7324ee1.apps.googleusercontent.com",
        "1074458220768-jdq1l03tbimdeeaqls0f7nl7fsh2h02r.apps.googleusercontent.com",
      iosClientId:
        "1074458220768-rne40k2ml9s76c3sm6qpgb0vu67cb3jr.apps.googleusercontent.com",

      scopes: ["profile", "email"]
    });

    if (result.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        result.idToken,
        result.accessToken
      );

      return firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(result => {
          return fetch(`${API_URL}/authenticate`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              uid: result.user.uid
            })
          })
            .then(response => response.json())
            .then(json => {
              if (json.user) {
                dispatch(setLogIn());
                dispatch(setUser(json.user));
                dispatch(themeActions.getTheme());

                return true;
              } else {
                return false;
              }
            });
        })
        .catch(error => console.log("google login error", error));
    }
  };
}

function submitFeedback(feedback) {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        return fetch(`${API_URL}/feedback`, {
          method: "POST",
          headers: {
            authorizationToken: idToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            feedback: feedback
          })
        })
          .then(response => response.json())
          .then(json => {
            // if (json.success === true) {
            return true;
            // } else {
            //   console.log("error", json);
            //   return false;
            // }
          });
      })
      .catch(error => console.log("firebase idToken error", error));
  };
}

function updateProfile(avatar, username) {
  return (dispatch, getState) => {
    return Storage.put(`${new Date().getTime()}-${uuidv1()}.jpg`, avatar, {
      contentType: "image/jepg"
    })
      .then(result => {
        const imageURL = `${S3_URL}/${result.key}`;

        return firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(idToken => {
            // updateUser to AWS
            return fetch(`${API_URL}/user`, {
              method: "PUT",
              headers: {
                authorizationToken: idToken,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                avatar: imageURL,
                nickname: username
              })
            })
              .then(response => response.json())
              .then(json => {
                if (json.success === true) {
                  dispatch(updateUser(imageURL, username));
                  return true;
                } else {
                  console.log("error", json);
                  return false;
                }
              });
          })
          .catch(error => console.log("firebase idToken error", error));
      })
      .catch(error => console.log("s3 error", error));
  };
}

function updateNickname(username) {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        return fetch(`${API_URL}/user`, {
          method: "PUT",
          headers: {
            authorizationToken: idToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nickname: username
          })
        })
          .then(response => response.json())
          .then(json => {
            if (json.success === true) {
              dispatch(updateUsername(username));
              return true;
            } else {
              console.log("error", json);
              return false;
            }
          });
      })
      .catch(error => console.log("firebase idToken error", error));
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
    case LOG_IN:
      return applyLogIn(state, action);
    case LOG_OUT:
      return applyLogOut(state, action);
    case SET_USER:
      return applySetUser(state, action);
    case UPDATE_USER:
      return applyUpdateUser(state, action);
    case UPDATE_USERNAME:
      return applyUpdateUsername(state, action);
    case FIRST_LAUNCH:
      return applyFirstLaunch(state, action);
    case FIRST_LOGIN:
      return applyFirstLogin(state, action);
    default:
      return state;
  }
}

// Reducer Actions

function applyLogIn(state, action) {
  return {
    ...state,
    isLoggedIn: true
  };
}

// 로그아웃할 때 스토리지 클리어 어떻게 하지
function applyLogOut(state, action) {
  AsyncStorage.clear();
  console.log("LOGOUTTT");
  return {
    ...state,
    isLoggedIn: false
  };
}

function applySetUser(state, action) {
  const { user } = action;
  return {
    ...state,
    profile: user
  };
}

function applyUpdateUser(state, action) {
  const { profile } = state;
  const { avatar, username } = action;
  return {
    ...state,
    profile: {
      ...profile,
      avatar: avatar,
      nickname: username
    }
  };
}

function applyUpdateUsername(state, action) {
  const { profile } = state;
  const { username } = action;
  return {
    ...state,
    profile: {
      ...profile,
      nickname: username
    }
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
  firstLogin,
  updateProfile,
  submitFeedback,
  updateNickname,
  logOut
};

export { actionCreators };

// Default Reducer Export
export default reducer;
