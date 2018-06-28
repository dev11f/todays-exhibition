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
    const {
      user: { token }
    } = getState();

    fetch(`${API_URL}/themes`, {
      headers: {
        authorizationToken: token
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
