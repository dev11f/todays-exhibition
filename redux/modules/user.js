// Imports
import { FB_APP_ID } from "../../constants";
import { Facebook, Google } from "expo";
import { AsyncStorage } from "react-native";
import { API_URL, S3_URL } from "../../constants";
import * as firebase from "firebase";
import { Storage } from "aws-amplify";
import uuidv1 from "uuid/v1";

// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const FIRST_LAUNCH = "FIRST_LAUNCH";
const FIRST_LOGIN = "FIRST_LOGIN";
const SET_USER = "SET_USER";
const UPDATE_USER = "UPDATE_USER";

// Actions Creators

function setLogIn(token) {
  return {
    type: LOG_IN,
    token
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
              uid: result.user.providerData[0].uid,
              providerId: result.user.providerData[0].providerId,
              email: result.user.providerData[0].email,
              displayName: result.user.providerData[0].displayName,
              avatar: result.user.providerData[0].photoURL,
              user_id: result.user.uid
            })
          })
            .then(response => response.json())
            .then(json => {
              if (json.user && json.token) {
                dispatch(setLogIn(json.token));
                dispatch(setUser(json.user));
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
        "1074458220768-5ipus17vbiq54pv99j5injuqq7324ee1.apps.googleusercontent.com",
      iosClientId:
        "1074458220768-rne40k2ml9s76c3sm6qpgb0vu67cb3jr.apps.googleusercontent.com",

      scopes: ["profile", "email"]
    });

    if (result.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        result.idToken
      );

      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(result => {
          return fetch(`${API_URL}/authenticate`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              uid: result.user.providerData[0].uid,
              providerId: result.user.providerData[0].providerId,
              email: result.user.providerData[0].email,
              displayName: result.user.providerData[0].displayName,
              avatar: result.user.providerData[0].photoURL,
              user_id: result.user.uid
            })
          })
            .then(response => response.json())
            .then(json => {
              console.log("facebook login return", json);
              if (json.user && json.token) {
                dispatch(setLogIn(json.token));
                dispatch(setUser(json.user));

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

function uploadProfile(avatar, username) {
  return (dispatch, getState) => {
    return Storage.put(`${new Date().getTime()}-${uuidv1()}.jpg`, avatar, {
      contentType: "image/jepg"
    }).then(result => {
      const imageURL = `${S3_URL}/${result.key}`;
      const {
        user: { token }
      } = getState();

      return fetch(`${API_URL}/updateUser`, {
        method: "PUT",
        headers: {
          authorizationToken: token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          avater: imageURL,
          nickname: username
        })
      }).then(response => {
        if (response.status === 401) {
          console.log("log out");
          // dispatch(userActions.logOut());
        } else if (response.ok) {
          dispatch(updateUser(imageURL, username));
          return true;
        } else {
          return false;
        }
      });
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
    case LOG_IN:
      return applyLogIn(state, action);
    case LOG_OUT:
      return applyLogOut(state, action);
    case SET_USER:
      return applySetUser(state, action);
    case UPDATE_USER:
      return applyUpdateUser(state, action);
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
  const { token } = action;
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

// 로그아웃할 때 스토리지 클리어 어떻게 하지
function applyLogOut(state, action) {
  AsyncStorage.clear();
  console.log("LOGOUTTT");
  return {
    ...state,
    isLoggedIn: false,
    token: ""
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
  const {
    profile,
    profile: { user }
  } = state;
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
  uploadProfile
};

export { actionCreators };

// Default Reducer Export
export default reducer;
