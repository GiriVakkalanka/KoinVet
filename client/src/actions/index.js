import axios from 'axios';
import {
  FETCH_USER,
  ADD_EXPERTISE,
  REMOVE_EXPERTISE,
  GET_EXPERTISE,
  SUBMIT_APPLICATION,
  CHANGE_LOCATION,
  TOGGLE_DRAWER,
  CHANGE_DATE,
  CHANGE_STARTTIME,
  CHANGE_ENDTIME,
  SELECT_WINDOW,
  GET_SENSEI_PAGE
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
  //console.log(application);
  //history.push('/sensei_application');
  dispatch({ type: SUBMIT_APPLICATION, payload: res.data });
};

export const changeLocation = location => {
  return { type: CHANGE_LOCATION, payload: location };
};

export const toggleDrawer = open => {
  return { type: TOGGLE_DRAWER, payload: open };
};

export const saveExpertise = expertiseChoices => async dispatch => {
  console.log(expertiseChoices);
  const res = await axios.post('/api/save_expertise_choices', expertiseChoices);
  //history.push('/sensei_application');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveSpecialization = specializationChoices => async dispatch => {
  //console.log(specializationChoices);
  const res = await axios.post(
    '/api/save_specialization_choices',
    specializationChoices
  );
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveLinks = linkChoices => async dispatch => {
  //console.log(specializationChoices);
  const res = await axios.post('/api/save_link_choices', linkChoices);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const changeDate = date => {
  //console.log(date);
  return { type: CHANGE_DATE, payload: date };
};

export const changeStarttime = startTime => {
  return { type: CHANGE_STARTTIME, payload: startTime };
};

export const changeEndtime = endTime => {
  return { type: CHANGE_ENDTIME, payload: endTime };
};

export const saveTimeWindow = timeWindow => async dispatch => {
  const res = await axios.post('/api/save_time_window', timeWindow);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const selectWindow = window => {
  console.log(window);
  return { type: SELECT_WINDOW, payload: window };
};

export const saveRate = rate => async dispatch => {
  console.log('action called');
  const res = await axios.post('/api/save_rate', rate);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveInfo = info => async dispatch => {
  console.log('action called');
  const res = await axios.post('/api/save_info', info);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const getSenseiPage = info => async dispatch => {
  console.log(info);
  const res = await axios.get('/api/get_sensei_page', { params: info });
  dispatch({ type: GET_SENSEI_PAGE, payload: res.data });
};

// export const fetchUser = () => async dispatch => {
//   const res = await axios.get('/api/current_user');
//   console.log(res.data);
//   dispatch({ type: FETCH_USER, payload: res.data });
// };
