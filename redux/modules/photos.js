// Imports
import { API_URL, S3_URL } from "../../constants";
import { actionCreators as userActions } from "./user";
import { Storage } from "aws-amplify";
import uuidv1 from "uuid/v1";

// Actions
const SET_FEED = "SET_FEED";
let offset = 0;
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
    const {
      user: { token }
    } = getState();
    fetch(`${API_URL}/art_works?offset=0`, {
      headers: {
        authorizationToken: token
      }
    })
      .then(response => {
        if (response.status === 401) {
          // logout
        } else {
          return response.json();
        }
      })
      .then(json => {
        console.log("getFeed done", json);
        dispatch(setFeed(json.data));
      })
      .catch(error => {
        console.log("getFeed", error);
      });
  };
}

function handleMyLike(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/art_like`, {
      method: "POST",
      headers: {
        authorizationToken: token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        art_id: photoId,
        type: "likes"
      })
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
      } else if (response.ok) {
        return response.json().then(json => {
          console.log(json.data);
          return true;
        });
      } else {
        return false;
      }
    });
  };
}

function handleMyHate(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/art_like?offset=0`, {
      method: "POST",
      headers: {
        authorizationToken: token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        art_id: photoId,
        type: "hates"
      })
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
      } else if (response.ok) {
        return response.json().then(json => {
          console.log(json.data);
          return true;
        });
      } else {
        return false;
      }
    });
  };
}

function uploadPhoto(avatar, caption) {
  return (dispatch, getState) => {
    return Storage.put(`${new Date().getTime()}-${uuidv1()}.jpg`, avatar, {
      contentType: "image/jepg"
    }).then(result => {
      const imageURL = `${S3_URL}/${result.key}`;
      const {
        user: { token }
      } = getState();

      return fetch(`${API_URL}/art_works`, {
        method: "POST",
        headers: {
          authorizationToken: token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          //theme_id 바꿔야 함
          theme_id: 1,
          title: caption,
          content: imageURL
        })
      }).then(response => {
        if (response.status === 401) {
          console.log("log out");
          // dispatch(userActions.logOut());
        } else if (response.ok) {
          return true;
        } else {
          return false;
        }
      });
    });
  };
}

function getComments(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    return fetch(`${API_URL}/comments/${photoId}?order=like`, {
      headers: {
        authorizationToken: token
      }
    })
      .then(response => {
        if (response.status === 401) {
          // logout
        } else if (response.ok) {
          return response.json().then(json => {
            return json.data;
          });
        }
      })
      .catch(error => console.log("getComments error", error));
  };
}

function uploadComment(photoId, text) {
  console.log("upload comment", photoId, text);
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    return fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {
        authorizationToken: token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        art_id: photoId,
        comment: text
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else if (response.ok) {
          return response
            .json()
            .then(json => {
              console.log("comment??", json.data);
              return true;
            })
            .catch(error => console.log("upload comment error", error));
        } else {
          return false;
        }
      })
      .catch(error => console.log("upload comment error!", error));
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
  uploadPhoto,
  handleMyLike,
  handleMyHate,
  getComments,
  uploadComment
};

export { actionCreators };

// Default Reducer Export

export default reducer;
