import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from "../constants/constants";

const token = localStorage.getItem("token");

const initialState = {
  isAuthenticated: false,
  user: null,
  token
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return state;
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!action.payload.token,
        token: action.payload.token
      };
    case SIGNUP_FAILURE:
      return state;
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!action.payload.token,
        token: action.payload.token
      };
    case LOGIN_FAILURE:
      return state;
    case LOGOUT_REQUEST:
      return state;
    case LOGOUT_SUCCESS:
      return state;
    case LOGOUT_FAILURE:
      return state;
    default:
      return state;
  }
}
