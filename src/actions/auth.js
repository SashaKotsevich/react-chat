import fetch from "isomorphic-fetch";
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

export function signup(username, password) {
  return dispatch => {
    console.log(username, password);
    dispatch({
      type: SIGNUP_REQUEST
    });
    fetch("http://localhost:8000/v1/signup", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
      })
      .then(json => {
        if (!json.token) {
          throw new Error("Token has not been provided!");
        }
        localStorage.setItem("token", json.token);
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: json
        });
      })
      .catch(reason => {
        dispatch({
          type: SIGNUP_FAILURE,
          payload: reason
        });
      });
  };
}

export function login() {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST
    });
  };
}
