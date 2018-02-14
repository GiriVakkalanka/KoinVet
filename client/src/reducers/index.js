import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import applicationReducer from './applicationReducer';
import locationReducer from './locationReducer';

export default combineReducers({
  auth: authReducer,
  application: applicationReducer,
  form: reduxForm,
  location: locationReducer
});
