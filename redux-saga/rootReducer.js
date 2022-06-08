import { combineReducers } from "redux";

import todoReducer from "./todo/reducer";
import counterReducer from "./counter/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer
});

export default rootReducer;