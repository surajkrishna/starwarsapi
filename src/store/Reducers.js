import * as constants from "../store/Constants";

const initialState = {
  categories: [],
  isLoading: false,
  swData: [],
  isSearchResultLoading: false
};

const loadCategoriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case constants.STARWAR_DATA_LOADING:
      return Object.assign({}, state, { isLoading: true });
    case constants.STARWAR_CONTENT_LOADING:
      return Object.assign({}, state, { isSearchResultLoading: true });
    case constants.STARWAR_LOADING_SUCCESS:
      return Object.assign({}, state, {
        categories: action.payload,
        isLoading: false
      });
    case constants.FETCH_STARWAR_DATA_SUCCESS:
      return Object.assign({}, state, {
        swData: action.payload,
        isSearchResultLoading: false
      });
    default:
      return state;
  }
};

export default loadCategoriesReducers;
