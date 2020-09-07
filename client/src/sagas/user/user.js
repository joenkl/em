import { call, put } from 'redux-saga/effects';
import { get } from 'lodash';
import { GET_USER_BY_COOKIE_TOKEN } from '../../config/actionTypes';
import * as UserService from '../../services/UserService';

export function* handleGetUserByCookieToken() {
  try {
    const response = yield call(UserService.getUserByCookieToken);
    const data = get(response, 'data') || {};
    yield put({ type: `${GET_USER_BY_COOKIE_TOKEN}_SUCCESS`, data });
  } catch (e) {
    yield put({ type: `${GET_USER_BY_COOKIE_TOKEN}_FAILURE` });
  }
}
