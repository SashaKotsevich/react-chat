import { combineReducers } from "redux";

import auth from "./authReducer";
import chats from "./chatReducer";

export default combineReducers({ auth, chats });
