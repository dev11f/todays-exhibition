// Imports
import { API_URL, S3_URL } from "../../constants";
import { actionCreators as userActions } from "./user";
import { Storage } from "aws-amplify";
import uuidv1 from "uuid/v1";
import * as firebase from "firebase";
// import AWS from "aws-sdk/dist//aws-sdk-react-native"
let offset = 0;

// Actions
const SET_FEED = "SET_FEED";

// Actions Creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

// API Actions
function getFeed() {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        return fetch(`${API_URL}/art_works?offset=0`, {
          headers: {
            authorizationToken: idToken
          }
        })
          .then(response => response.json())
          .then(json => {
            // if (json.success === true) {
            dispatch(setFeed(json.data));
            // } else {
            //   console.log("error", json);
            // }
          });
      })
      .catch(error => console.log("firebase idToken error", error));
  };
}

function getPhoto(id) {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        fetch(`${API_URL}/art_works/${id}`, {
          headers: {
            authorizationToken: idToken
          }
        })
          .then(response => response.json())
          .then(json => {
            if (json.success === true) {
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

function handleMyLike(photoId) {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        return fetch(`${API_URL}/art_like`, {
          method: "POST",
          headers: {
            authorizationToken: idToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            art_id: photoId,
            type: "likes"
          })
        })
          .then(response => response.json())
          .then(json => {
            console.log(json);
            return true;
          });
      });
  };
}

function handleMyHate(photoId) {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        return fetch(`${API_URL}/art_like`, {
          method: "POST",
          headers: {
            authorizationToken: idToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            art_id: photoId,
            type: "hates"
          })
        })
          .then(response => response.json())
          .then(json => {
            console.log(json);
            return true;
          });
      });
  };
}

function uploadPhoto(avatar, caption) {
  return (dispatch, getState) => {
    const {
      theme: {
        themeInfo: { id }
      }
    } = getState();
    return Storage.put(`${new Date().getTime()}-${uuidv1()}.jpg`, avatar, {
      contentType: "image/jepg"
    }).then(result => {
      const imageURL = `${S3_URL}/${result.key}`;

      return firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(idToken => {
          return fetch(`${API_URL}/art_works`, {
            method: "POST",
            headers: {
              authorizationToken: idToken,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              theme_id: id,
              title: caption,
              content: imageURL
            })
          })
            .then(response => response.json())
            .then(json => {
              return true;
            });
        });
    });
  };
}

function getComments(photoId) {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        return fetch(`${API_URL}/comments/${photoId}?order=like`, {
          headers: {
            authorizationToken: idToken
          }
        })
          .then(response => response.json())
          .then(json => {
            return json.data;
          })
          .catch(error => console.log("error", error));
      });
  };
}

function uploadComment(photoId, text) {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        return fetch(`${API_URL}/comments`, {
          method: "POST",
          headers: {
            authorizationToken: idToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            art_id: photoId,
            comment: text
          })
        })
          .then(response => response.json())
          .then(json => {
            return true;
          });
      });
  };
}

function likeComment(commentId) {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        return fetch(`${API_URL}/comment_like`, {
          method: "POST",
          headers: {
            authorizationToken: idToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            comment_id: commentId
          })
        })
          .then(response => response.json())
          .then(json => {
            console.log(json);
            return true;
          });
      });
  };
}

// Initial State
const initialState = {};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
}

// Reducer Actions
function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

// Exports
const actionCreators = {
  getFeed,
  getPhoto,
  uploadPhoto,
  handleMyLike,
  handleMyHate,
  getComments,
  uploadComment,
  likeComment
};

export { actionCreators };

// Default Reducer Export

export default reducer;
