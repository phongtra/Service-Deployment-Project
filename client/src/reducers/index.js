import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import infoReducer from './infoReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  infos: infoReducer
});
