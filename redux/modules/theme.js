// Imports
import { API_URL } from "../../constants";

// Actions

const SET_THEME = "SET_THEME";

// Actions Creators

function setTheme(theme) {
  return {
    type: SET_THEME,
    theme
  };
}

// API Actions
function getTheme() {
  return (dispatch, getState) => {
    fetch(`${API_URL}/themes`, {
      headers: {
        authorizationToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNiwidWlkIjoiMTFrYWtja2N2MDEtdWxrc2pkbGtqd29va2llY29va3NkaWVAZ21haWwuY29tIiwiZW1haWwiOiJ3b29raWVjb29rc2RpZUBnbWFpbC5jb20iLCJ0eXBlIjoiZmFjZWJvb2siLCJuaWNrbmFtZSI6ImhlbGVsZWxlbGUiLCJyZXBvcnRlZCI6bnVsbCwiYXZhdGFyIjoidW5kZWZpbmVkIn0sImlhdCI6MTUyODM5MzA2OSwiZXhwIjoxNTM3MDMzMDY5fQ.FNs-8jNl9vlFJyckkvsxFOAdzkfQZp3eyUs3rHM9rfc"
      }
    })
      .then(response => {
        // response 문제 있으면 로그아웃
        return response.json();
      })
      .then(json => dispatch(setTheme(json.data[0].theme_title)));
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
  const { theme } = action;
  return {
    ...state,
    theme
  };
}

// Exports
const actionCreators = {
  getTheme
};

export { actionCreators };

// Default Reducer Export
export default reducer;
