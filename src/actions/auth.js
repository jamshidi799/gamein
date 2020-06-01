import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS } from './types';
import axios from 'axios';

// REGISTER USER
export const signup = user => dispatch => {
  // Headers
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   const body = JSON.stringify(user);

  //   axios
  //     .post('api', body, config)
  //     .then(res => {
  //       dispatch({
  //         type: REGISTER_SUCCESS,
  //         payload: res.data,
  //       });
  //     })
  //     .catch(err => {
  //       dispatch({
  //         type: REGISTER_FAIL,
  //       });
  //     });

  return dispatch({
    type: REGISTER_SUCCESS,
    payload: user,
  });
};

export const signin = user => dispatch => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
