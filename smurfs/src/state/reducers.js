import React from "react";
import * as types from "./actionTypes";
import uuid from "uuid";

//slices of state;
const initialSmurf = {
  fetchData: false,
  smurfData: [],
  fetchError: ""
};

export const smurfReducer = (state = initialSmurf, action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return { ...state, fetchData: true };
    case types.SMURF_DATA:
      return { ...state, smurfData: action.payload };
    case types.GET_ERROR:
      return { ...state, fetchError: action.payload };

    default:
      return state;
  }
};

const initialFormState =  {
    id: uuid(),
    name: "",
    age: "",
    height: ""
  };

  export const  formReducer = (state = initialFormState, action) => {
    switch (action.type) {
      case types.INPUT_SMURF:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  }

//slices of state;
const initialSmurfPosted = {
  postData: false,
  smurfPosted: {},
  postError: ""
};

export const postSmurfReducer = (state = initialSmurfPosted, action) => {
  switch (action.type) {
    case types.POST_DATA:
      return { ...state, postData: true };
    case types.POST_SMURF:
      return {
        ...state,
        smurfPosted: action.payload
      };
    case types.POST_ERROR:
      return { ...state, postError: action.payload };
    default:
      return state;
  }
};
