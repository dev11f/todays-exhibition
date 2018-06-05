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
    fetch(`${API_URL}/art_works?offset=${offset}`)
      .then(response => {
        if (response.status === 401) {
          // logout
        } else {
          return response.json();
        }
      })
      .then(json => {
        dispatch(setFeed(json.data));
        offset += 20;
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
  getFeed
};

export { actionCreators };

// Default Reducer Export

export default reducer;
