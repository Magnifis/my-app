import { createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer copy";
import { profileReducer } from "./profile-reducer";
import siteBarReducer from "./siteBar-reducer ";
import { combineReducers } from "redux";
import usersReducer from "./users-reducer";
let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  siteBar: siteBarReducer,
  usersPage: usersReducer,
});
let store = createStore(reducers);

export default store;
