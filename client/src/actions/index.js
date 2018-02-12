import axios from 'axios';
import {
  FETCH_USER,
  ADD_EXPERTISE,
  REMOVE_EXPERTISE,
  GET_EXPERTISE,
  SUBMIT_APPLICATION
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log(res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addExpertise = expertise => {
  return { type: ADD_EXPERTISE, payload: expertise };
};

export const removeExpertise = expertise => {
  return { type: REMOVE_EXPERTISE, payload: expertise };
};

export const getExpertise = () => {
  return { type: GET_EXPERTISE, payload: null };
};

export const submitApplication = application => async dispatch => {
  const res = await axios.post('/api/submit_application', application);
  //history.push('/sensei_application');
  dispatch({ type: SUBMIT_APPLICATION, payload: res.data });
};
