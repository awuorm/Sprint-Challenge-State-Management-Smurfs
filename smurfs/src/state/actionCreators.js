import React from "react";
import * as types from "./actionTypes";
import axios from "axios";

export const fetchData = () => {
  return { type: types.FETCH_DATA };
};

export const getError = err => {
  return { type: types.GET_ERROR, payload: err };
};

export const smurfData = () => dispatch => {
  dispatch(fetchData());
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("response from server", res);
      dispatch({ type: types.SMURF_DATA, payload: res.data });
    })
    .catch(err => {
      console.log("error from server", err.message);
      dispatch(getError(err.message));
    });
};

export const postData = () => {
  return { type: types.POST_DATA };
};

export const postError = err => {
  return { type: types.POST_ERROR, payload: err };
};

export const inputSmurf = (target) => {
    console.log("target from input smurf", target.name, target.value);
    return { type: types.INPUT_SMURF, payload: {
        name: target.name,
      value: target.value,
    }};
  };
  


export const postSmurf = (smurf) => dispatch => {
    console.log("smurf from event listener",smurf );
    
  dispatch(postData());
  axios
    .post("http://localhost:3333/smurfs",smurf)
    .then(res => {
        console.log("response from post server", res);
      dispatch({
        type: types.POST_SMURF,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("error from post server", err.message);
      dispatch(postError(err.message));
    });
};
