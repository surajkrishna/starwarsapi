import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { Api } from "../api/api.js";
import * as action from "../store/ActionCreators";
import * as constants from "../store/Constants";

// worker Saga: will be fired on FETCH_STARWAR_CATEGORIES actions
export function* loadCategories() {
  try {
    yield put(action.isLoading());
    const category = yield call(Api.fetchCategory);
    yield put(action.loadingSuccess(category));
  } catch (e) {
    yield put(action.loadingError(e.msg));
  }
}

export function* fetchStarWarData(actions) {
  try {
    yield put(action.isApiContentLoading());
    const data = yield call(Api.fetchCategory, actions.payload);
    yield put(action.fetchStarWarsDataSuccess(data.results));
  } catch (e) {
    yield put(action.loadingError(e.msg));
  }
}

/*
  Starts loadCategories on dispatched `FETCH_STARWAR_CATEGORIES` action.  
*/
function* mySaga() {
  yield all([
    takeEvery(constants.FETCH_STARWAR_CATEGORIES, loadCategories),
    takeEvery(constants.FETCH_STARWAR_DATA, fetchStarWarData)
  ]);
}

export default mySaga;
