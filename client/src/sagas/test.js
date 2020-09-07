import { call, put } from 'redux-saga/effects';
import { get } from 'lodash';
import { FETCH_TEST_API } from '../config/actionTypes';
import * as TestService from '../services/TestService';

export function* handleFetchTestApi() {
  try {
    const response = yield call(TestService.fetchTestApi);
    const data = get(response, 'data') || {};
    yield put({ type: `${FETCH_TEST_API}_SUCCESS`, data });
  } catch (e) {
    yield put({ type: `${FETCH_TEST_API}_FAILURE` });
  }
}
