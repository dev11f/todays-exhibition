// Imports
import { API_URL } from "../../constants";

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
    fetch(`${API_URL}/art_works?offset=${offset}`, {
      headers: {
        authorizationToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNiwidWlkIjoiMTFrYWtja2N2MDEtdWxrc2pkbGtqd29va2llY29va3NkaWVAZ21haWwuY29tIiwiZW1haWwiOiJ3b29raWVjb29rc2RpZUBnbWFpbC5jb20iLCJ0eXBlIjoiZmFjZWJvb2siLCJuaWNrbmFtZSI6ImhlbGVsZWxlbGUiLCJyZXBvcnRlZCI6bnVsbCwiYXZhdGFyIjoidW5kZWZpbmVkIn0sImlhdCI6MTUyODM5MzA2OSwiZXhwIjoxNTM3MDMzMDY5fQ.FNs-8jNl9vlFJyckkvsxFOAdzkfQZp3eyUs3rHM9rfc"
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
        dispatch(setFeed(json.data));
        console.log("offset", offset);
        offset += 20;
      });
  };
}

function likePhoto(photoId) {
  return (dispatch, getState) => {
    // const {
    //   user: { token }
    // } = getState();
    return fetch(`${API_URL}/production/art_like`, {
      method: "POST",
      headers: {
        authorizationToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNiwidWlkIjoiMTFrYWtja2N2MDEtdWxrc2pkbGtqd29va2llY29va3NkaWVAZ21haWwuY29tIiwiZW1haWwiOiJ3b29raWVjb29rc2RpZUBnbWFpbC5jb20iLCJ0eXBlIjoiZmFjZWJvb2siLCJuaWNrbmFtZSI6ImhlbGVsZWxlbGUiLCJyZXBvcnRlZCI6bnVsbCwiYXZhdGFyIjoidW5kZWZpbmVkIn0sImlhdCI6MTUyODM5MzA2OSwiZXhwIjoxNTM3MDMzMDY5fQ.FNs-8jNl9vlFJyckkvsxFOAdzkfQZp3eyUs3rHM9rfc",
        "Content-Type": "application/json"
      },
      body: {
        art_id: photoId,
        type: "likes"
      }
    }).then(response => {
      console.log(response);
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
  likePhoto
};

export { actionCreators };

// Default Reducer Export

export default reducer;
