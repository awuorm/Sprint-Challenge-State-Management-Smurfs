import React from "react";
import * as types from "./actionTypes";

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

//   export const catReducer = (state = initialCat, action) => {
//     switch (action.type) {
//       case types.FETCH_DATA:
//         return { ...state, fetchData: true, fetchError: "" };
//       case types.GET_CAT:
//         return { ...state, catFacts: action.payload, fetchError: "" };
//         case types.GET_ERROR:
//             return {...state, fetchError: action.payload};
//       default:
//         return state;
//     }
//   };
