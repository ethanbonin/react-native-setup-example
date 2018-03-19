import { combineReducers } from "redux";
import userReducer from './userReducer';

// Combine reducers
export default combineReducers({
  user: userReducer
});
