
export const fetchData = () => {
    return { type: types.FETCH_DATA };
  };
  
  export const getError = err => {
    return { type: types.GET_ERROR, payload: err };
  };