// Imports
import { FB_APP_ID } from "../../constants";
import { Facebook } from "expo";
import { AsyncStorage } from "react-native";

// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

// Actions Creators

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
      console.log(type, token);
    }
  };
}

// Initial State
const initialState = { isLoggedIn: true };

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_OUT:
      return applyLogOut(state, action);
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
    isLoggedIn: true,
    token: ""
  };
}

// Exports

const actionCreators = {
  facebookLogin
};

export { actionCreators };

// Default Reducer Export
export default reducer;
