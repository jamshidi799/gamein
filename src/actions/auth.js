import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS } from './types';
import axios from 'axios';
import { SERVER_ADDRESS } from '../consts';

// REGISTER USER
export const register = user => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify(user);

  axios
    .post(`${SERVER_ADDRESS}/api/accounts/signup`, body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        // type: LOGIN_FAIL,
        type: 'default',
      });
    });
};

export const login = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post(`${SERVER_ADDRESS}/api/accounts/login`, body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        // type: LOGIN_FAIL,
        type: 'default',
      });
    });
};
