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
      dispatch({ type: types.SMURF_DATA, payload: res.data });
    })
    .catch(err => {
      dispatch(getError(err.message));
    });
};

export const postData = () => {
  return { type: types.POST_DATA };
};

export const postError = err => {
  return { type: types.POST_ERROR, payload: err };
};

export const inputSmurf = target => {
  return {
    type: types.INPUT_SMURF,
    payload: {
      name: target.name,
      value: target.value
    }
  };
};

export const postSmurf = smurf => dispatch => {
  dispatch(postData());
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({
        type: types.POST_SMURF,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(postError(err.message));
    });
};
