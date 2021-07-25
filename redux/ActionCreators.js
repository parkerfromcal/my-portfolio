import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchLanguages = () => (dispatch) => {
  return fetch(baseUrl + "languages")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((languages) => dispatch(addLanguages(languages)))
    .catch((error) => dispatch(languagesFailed(error.message)));
};

export const languagesFailed = (errMess) => ({
  type: ActionTypes.LANGUAGES_FAILED,
  payload: errMess,
});

export const addLanguages = (languages) => ({
  type: ActionTypes.ADD_LANGUAGES,
  payload: languages,
});

export const fetchProjects = () => (dispatch) => {
  dispatch(projectsLoading());

  return fetch(baseUrl + "projects")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((projects) => dispatch(addProjects(projects)))
    .catch((error) => dispatch(projectsFailed(error.message)));
};

export const projectsLoading = () => ({
  type: ActionTypes.PROJECTS_LOADING,
});

export const projectsFailed = (errMess) => ({
  type: ActionTypes.PROJECTS_FAILED,
  payload: errMess,
});

export const addProjects = (projects) => ({
  type: ActionTypes.ADD_PROJECTS,
  payload: projects,
});

export const fetchSkills = () => (dispatch) => {
  return fetch(baseUrl + "skills")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((skills) => dispatch(addSkills(skills)))
    .catch((error) => dispatch(skillsFailed(error.message)));
};

export const skillsFailed = (errMess) => ({
  type: ActionTypes.SKILLS_FAILED,
  payload: errMess,
});

export const addSkills = (skills) => ({
  type: ActionTypes.ADD_SKILLS,
  payload: skills,
});

export const fetchTools = () => (dispatch) => {
  return fetch(baseUrl + "tools")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((tools) => dispatch(addTools(tools)))
    .catch((error) => dispatch(toolsFailed(error.message)));
};

export const toolsFailed = (errMess) => ({
  type: ActionTypes.TOOLS_FAILED,
  payload: errMess,
});

export const addTools = (tools) => ({
  type: ActionTypes.ADD_TOOLS,
  payload: tools,
});
