import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { languages } from "./languages";
import { projects } from "./projects";
import { skills } from "./skills";
import { tools } from "./tools";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      languages,
      projects,
      skills,
      tools,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
