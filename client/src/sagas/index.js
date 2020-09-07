import { takeLatest, all, takeEvery } from 'redux-saga/effects';
import { FETCH_TEST_API, GET_USER_BY_COOKIE_TOKEN } from '../config/actionTypes';
import { handleFetchTestApi } from './test';
import { handleGetUserByCookieToken } from './user/user';

function* testSaga() {
  yield takeLatest(`${FETCH_TEST_API}_REQUEST`, handleFetchTestApi);
}

function* watchGetUserByCookieToken() {
  yield takeEvery(`${GET_USER_BY_COOKIE_TOKEN}_REQUEST`, handleGetUserByCookieToken);
}

export default function* rootSaga() {
  yield all([
    testSaga(),
    watchGetUserByCookieToken(),
  ]);
}
