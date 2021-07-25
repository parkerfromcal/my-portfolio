import * as ActionTypes from "./ActionTypes";

export const tools = (state = { errMess: null, tools: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TOOLS:
      return { ...state, errMess: null, tools: action.payload };

    case ActionTypes.TOOLS_FAILED:
      return { ...state, errMess: action.payload };

    default:
      return state;
  }
};
