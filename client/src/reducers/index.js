import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import applicationReducer from './applicationReducer';
import locationReducer from './locationReducer';
import drawerReducer from './drawerReducer';
export default combineReducers({
  auth: authReducer,
  application: applicationReducer,
  form: reduxForm,
  location: locationReducer,
  drawer: drawerReducer
});
