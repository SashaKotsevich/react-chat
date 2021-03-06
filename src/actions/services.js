import history from "../utils/history";
import { REDIRECT } from "../constants/auth";

export function redirect(to) {
  return dispatch => {
    history.push(`${process.env.PUBLIC_URL}/${to}`);
    dispatch({
      type: REDIRECT,
      payload: { to }
    });
  };
}
