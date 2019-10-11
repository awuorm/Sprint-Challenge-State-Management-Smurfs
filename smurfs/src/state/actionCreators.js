import * as types from "./actionTypes";

export const fetchData = () => {
    return { type: types.FETCH_DATA };
  };
  
  export const getError = err => {
    return { type: types.GET_ERROR, payload: err };
  };

  export const smurfData = () => dispatch => {
      return {type: types.SMURF_DATA}
  }

  export const postSmurf = () => dispatch => {
    return {type: types.POST_SMURF}
}