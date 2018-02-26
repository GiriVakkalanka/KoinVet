import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import applicationReducer from './applicationReducer';
import locationReducer from './locationReducer';
import drawerReducer from './drawerReducer';
import dateReducer from './dateReducer';
import selectedWindowReducer from './selectedWindowReducer';

export default combineReducers({
  auth: authReducer,
  application: applicationReducer,
  form: reduxForm,
  location: locationReducer,
  drawer: drawerReducer,
  date: dateReducer,
  selectedWindow: selectedWindowReducer
});
