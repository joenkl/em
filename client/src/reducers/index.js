import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import test from './test/testReducer';
import user from './user/userReducer';

const rootReducer = combineReducers({
  test,
  user,
  formReducer
});

export default rootReducer;
