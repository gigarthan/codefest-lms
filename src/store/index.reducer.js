import { combineReducers } from "redux";
import authReducer from "../shared/reducers/auth.reducers";
import courseReducer from "../modules/courses/redux/course.reducer";

export default combineReducers({
  auth: authReducer,
  courses: courseReducer
});
