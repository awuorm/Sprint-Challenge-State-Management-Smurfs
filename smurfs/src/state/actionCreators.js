import * as types from "./actionTypes";
import axios from "axios";

export const fetchData = () => {
    return { type: types.FETCH_DATA };
  };
  
  export const getError = (err) => {
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
        console.log("error from server", err);
        dispatch(getError(err));
      });

  }

//   export const getCat = () => dispatch => {
//     dispatch(fetchData());
//     axios
//       .get("https://reqres.in/api/users?page=2")
//       .then(res => {
//         dispatch({ type: types.GET_CAT, payload: res.data.data });
//       })
//       .catch(err => {
//         dispatch(getError(err));
//       });
//   };

  export const postSmurf = () => dispatch => {
    return {type: types.POST_SMURF}
}