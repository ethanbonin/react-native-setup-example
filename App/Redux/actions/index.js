import {
  CHANGE_USERNAME,
} from "./types";

//---------------------USER REDUX ACTIONS---------------------------//

export const changeUserName = userName => async dispatch => {
  console.log("Do stuff in here, then dispatch")
  dispatch({ type: CHANGE_USERNAME, payload: userName });
};
