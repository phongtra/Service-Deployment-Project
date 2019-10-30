import axios from 'axios';
import {
  FETCH_USER,
  FETCH_INFOS,
  CREATE_INFO,
  EDIT_INFO,
  FETCH_INFO,
  DELETE_INFO
} from './type';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  return dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchInfos = () => async dispatch => {
  const res = await axios.get('/api/info');
  return dispatch({ type: FETCH_INFOS, payload: res.data });
};

export const fetchInfo = id => async dispatch => {
  const res = await axios.get(`/api/info/${id}`);
  return dispatch({ type: FETCH_INFO, payload: res.data });
};

export const createInfo = (payload, callback) => async dispatch => {
  const res = await axios.post('/api/info', payload);
  dispatch({ type: CREATE_INFO, payload: res.data });
  callback();
};

export const editInfo = (id, payload, callback) => async dispatch => {
  const res = await axios.put(`/api/info/${id}`, payload);
  dispatch({ type: EDIT_INFO, payload: res.data });
  callback();
};

export const deleteInfo = (id, callback) => async dispatch => {
  const res = await axios.delete(`/api/info/${id}`);
  dispatch({ type: DELETE_INFO, payload: res.data });
  callback();
};
