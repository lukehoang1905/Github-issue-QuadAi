import { combineReducers } from "redux";
import issueReducer from "./issue.reducer";

export default combineReducers({
  issue: issueReducer,
});