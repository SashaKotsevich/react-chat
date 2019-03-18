import * as types from "../constants/auth";

const token = localStorage.getItem("token");

const initialState = {
  isAuthenticated: !!token,
  user: null,
  token
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return state;
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!action.payload.token,
        token: action.payload.token,
        user: action.payload.user
      };
    case types.SIGNUP_FAILURE:
      return state;
    case types.LOGIN_REQUEST:
      return state;
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!action.payload.token,
        token: action.payload.token,
        user: action.payload.user
      };
    case types.LOGIN_FAILURE:
      return state;
    case types.LOGOUT_REQUEST:
      return state;
    case types.LOGOUT_SUCCESS:
      return state;
    case types.LOGOUT_FAILURE:
      return state;
    case types.RECIEVE_AUTH_REQUEST:
      return state;
    case types.RECIEVE_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      };
    case types.RECIEVE_AUTH_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        token: undefined
      };
    default:
      return state;
  }
}
