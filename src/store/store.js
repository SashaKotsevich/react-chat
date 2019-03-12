import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import root from "../reducers/root";

export default function configureStore() {
  return createStore(root, applyMiddleware(thunkMiddleware));
}
