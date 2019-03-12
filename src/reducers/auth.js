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
      console.log("signup_request");
      return state;
    case SIGNUP_SUCCESS:
      console.log("signup_success", action.payload.token);
      return {
        ...state,
        token: action.payload.token
      };
    case SIGNUP_FAILURE:
      console.log("signup_failure");
      return state;
    case LOGIN_REQUEST:
      console.log("login_request");
      return state;
    case LOGIN_SUCCESS:
      console.log("login_success");
      return state;
    case LOGIN_FAILURE:
      console.log("login_failure");
      return state;
    case LOGOUT_REQUEST:
      console.log("logout_request");
      return state;
    case LOGOUT_SUCCESS:
      console.log("logout_success");
      return state;
    case LOGOUT_FAILURE:
      console.log("logout_failure");
      return state;
    default:
      return state;
  }
}
