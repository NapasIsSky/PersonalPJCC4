import { combineReducers } from "redux";
import userReducer from "./ีuserReducer";

const reducer = combineReducers({
  user: userReducer
});

export default reducer;
