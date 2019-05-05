import * as constants from "./Constants.js";

export const loadCategory = () => {
  return {
    type: constants.FETCH_STARWAR_CATEGORIES
  };
};

export const loadingSuccess = data => {
  return {
    type: constants.STARWAR_LOADING_SUCCESS,
    payload: data
  };
};

export const loadingError = data => {
  return {
    type: constants.STARWAR_LOADING_ERROR,
    payload: data
  };
};

export const isLoading = () => {
  return {
    type: constants.STARWAR_DATA_LOADING
  };
};

export const fetchStarWarsData = data => {
  return {
    type: constants.FETCH_STARWAR_DATA,
    payload: data
  };
};

export const fetchStarWarsDataSuccess = data => {
  return {
    type: constants.FETCH_STARWAR_DATA_SUCCESS,
    payload: data
  };
};

export const isApiContentLoading = () => {
  return {
    type: constants.STARWAR_CONTENT_LOADING
  };
};
