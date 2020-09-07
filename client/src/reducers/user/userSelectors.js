import { get } from 'lodash';
import { createSelector } from 'reselect';

export const getUser = (state) => get(state, 'user');

export const getUserId = createSelector(
  getUser,
  userState => get(userState, '_id')
);
