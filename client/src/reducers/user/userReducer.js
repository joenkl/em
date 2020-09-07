import { GET_USER_BY_COOKIE_TOKEN } from '../../config/actionTypes';

export default function (state = {}, action) {
  const { type, data } = action;
  switch(type) {
    case `${GET_USER_BY_COOKIE_TOKEN}_SUCCESS`: {
      return data ? { ...data } : state;
    }
    default: {
      return state;
    }
  }
}