import axios from "axios";

import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqvbtoxAGQ9fg9ThFiCM2K21b_3-U-tMA",
        authData
      )
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};