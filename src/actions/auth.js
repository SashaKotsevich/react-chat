import fetch from "isomorphic-fetch";
import * as types from "../constants/constants";

export function signup(username, password) {
  return dispatch => {
    console.log(username, password);
    dispatch({
      type: types.SIGNUP_REQUEST
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
        } else throw new Error(json.message);
      })
      .then(json => {
        if (!json.token) {
          throw new Error("Token has not been provided!");
        }

        localStorage.setItem("token", json.token);

        dispatch({
          type: types.SIGNUP_SUCCESS,
          payload: json
        });
      })
      .catch(reason => {
        dispatch({
          type: types.SIGNUP_FAILURE,
          payload: reason
        });
      });
  };
}

export function login(username, password) {
  return dispatch => {
    dispatch({
      type: types.LOGIN_REQUEST
    });
    fetch("http://localhost:8000/v1/login", {
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
        } else throw new Error(json.message);
      })
      .then(json => {
        if (!json.token) {
          throw new Error("Token has not been provided!");
        }

        localStorage.setItem("token", json.token);

        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: json
        });
      })
      .catch(reason => {
        dispatch({
          type: types.LOGIN_FAILURE,
          payload: reason
        });
      });
  };
}

export function recieveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    console.log(getState());
    if (!token) {
      dispatch({
        type: types.RECIEVE_AUTH_FAILURE
      });
    } else {
      dispatch({
        type: types.RECIEVE_AUTH_REQUEST
      });
    }

    return fetch("http://localhost:8000/v1/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }

        throw new Error(json.message);
      })
      .then(json =>
        dispatch({
          type: types.RECIEVE_AUTH_SUCCESS,
          payload: json
        })
      )
      .catch(reason =>
        dispatch({
          type: types.RECIEVE_AUTH_FAILURE,
          payload: reason
        })
      );
  };
}
