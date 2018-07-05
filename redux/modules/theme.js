// Imports
import { API_URL } from "../../constants";
import * as firebase from "firebase";

// Actions

const SET_THEME = "SET_THEME";

// Actions Creators

function setTheme(themeInfo) {
  return {
    type: SET_THEME,
    themeInfo
  };
}

// API Actions
function getTheme() {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        fetch(`${API_URL}/themes`, {
          headers: {
            authorizationToken: idToken
          }
        })
          .then(response => response.json())
          .then(json => {
            dispatch(setTheme(json.data[0]));
          });
      });
  };
}

// Initial State
const initialState = { theme: null };

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return applySetTheme(state, action);
    default:
      return state;
  }
}

// Reducer Actions
function applySetTheme(state, action) {
  const { themeInfo } = action;
  return {
    ...state,
    themeInfo
  };
}

// Exports
const actionCreators = {
  getTheme
};

export { actionCreators };

// Default Reducer Export
export default reducer;
