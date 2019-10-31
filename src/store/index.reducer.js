import { combineReducers } from "redux";
import authReducer from "../shared/reducers/auth.reducers";

export default combineReducers({
  auth: authReducer
});
