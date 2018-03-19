import { CHANGE_USERNAME } from "../actions/types";

var initialState = {
  first: "Jacob",
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      state = { first: "Ethan"}
      return state;
    default:
      return state;
  }
}
