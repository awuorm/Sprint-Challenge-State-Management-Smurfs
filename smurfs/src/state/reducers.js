import React from "react";
import { stat } from "fs";
//slices of state;
const initialSmurf = {
    fetchData: false,
    smurfData: [],
    fetchError: ""
  };

  export const smurfReducer = (state=initialSmurf,action) => {
    switch(action.type) {
        default: 
        return state;
    }
  }