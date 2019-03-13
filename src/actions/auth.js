import * as types from "../constants/constants";
import callApi from "../services/api-service";

export function signup(username, password) {
  return dispatch => {
    console.log(username, password);
    dispatch({
      type: types.SIGNUP_REQUEST
    });

    callApi(
      "signup",
      undefined,
      { method: "POST" },
      {
        username,
        password
      }
    )
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
    callApi(
      "login",
      undefined,
      { method: "POST" },
      {
        username,
        password
      }
    )
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

    if (!token) {
      dispatch({
        type: types.RECIEVE_AUTH_FAILURE
      });
    } else {
      dispatch({
        type: types.RECIEVE_AUTH_REQUEST
      });
    }

    callApi("users/me", token)
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
