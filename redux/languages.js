import * as ActionTypes from "./ActionTypes";

export const languages = (state = { errMess: null, languages: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LANGUAGES:
      return { ...state, errMess: null, languages: action.payload };

    case ActionTypes.LANGUAGES_FAILED:
      return { ...state, errMess: action.payload };

    default:
      return state;
  }
};
