import { applyMiddleware, createStore } from "redux";
import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import user from "./modules/user";
import photos from "./modules/photos";
import theme from "./modules/theme";

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage
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

export default configureStore;
