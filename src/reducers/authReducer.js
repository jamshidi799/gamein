import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  AUTH_ERROR,
  USER_LOADED,
  USER_LOADING,
  AUTHENTICATED,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: {
    profile: {
      university: 'sharif',
      birth_date: '2020-01-01',
      phone_number: '09111111111',
      major: 'Computer engineering',
    },
    first_name: 'admin',
    last_name: 'admin',
    email: 'admin@admin.com',
    password: '123456',
    password_repeat: '123456',
    username: 'mammad',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };

    default:
      return state;
  }
}
