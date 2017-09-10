import { combineReducers } from 'redux';
import auth from './auth';
import disk from './disk';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  auth,
  disk,
  routing: routerReducer
});
