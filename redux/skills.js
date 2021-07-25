import * as ActionTypes from "./ActionTypes";

export const skills = (state = { errMess: null, skills: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SKILLS:
      return { ...state, errMess: null, skills: action.payload };

    case ActionTypes.SKILLS_FAILED:
      return { ...state, errMess: action.payload };

    default:
      return state;
  }
};
