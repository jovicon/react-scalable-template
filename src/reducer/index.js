import { combineReducers } from 'redux';
import { auth } from './auth/authStates';
import { s3 } from './s3/s3States';

export default combineReducers({
  auth,
  s3
});
