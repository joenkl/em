import { FETCH_TEST_API } from '../../config/actionTypes';

export default function (state = {}, action) {
  const { type, data } = action;
  switch(type) {
    case `${FETCH_TEST_API}_SUCCESS`: {
      return data ? { ...data } : state;
    }
    case `${FETCH_TEST_API}_FAILURE`: {
      return state;
    }
    default: {
      return state;
    }
  }
}
