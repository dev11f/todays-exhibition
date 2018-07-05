import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import {
  persistCombineReducers,
  persistStore,
  persistReducer
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import thunk from "redux-thunk";
import user from "./modules/user";
import photos from "./modules/photos";
import theme from "./modules/theme";
// import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { firebaseConfig, reduxFirebaseConfig } from "../constants";
import firebase from "firebase/app";

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage
  // localStorage
};

const reducer = persistCombineReducers(persistConfig, {
  user,
  photos,
  theme
});

const configureStore = () => {
  let store = createStore(reducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return { store, persistor };
};

// const configureStore = () => {
//   firebase.initializeApp(firebaseConfig);

//   // Add reactReduxFirebase store enhancer when making store creator
//   const createStoreWithFirebase = compose(
//     reactReduxFirebase(firebase, reduxFirebaseConfig)
//   )(createStore);

//   // Add firebase to reducers (uses persistReducer and hardSet)
//   const rootReducer = combineReducers({
//     firebase: persistReducer(
//       { key: "firepersist", storage: localStorage, stateReconciler: hardSet },
//       firebaseReducer
//     ),
//     user,
//     photos,
//     theme
//   });

//   const persistedReducer = persistReducer(persistConfig, rootReducer);

//   let store = createStoreWithFirebase(
//     persistedReducer,
//     applyMiddleware(...middlewares)
//   );

//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export default configureStore;
