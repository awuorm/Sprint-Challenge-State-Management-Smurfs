import React, { useEffect } from "react";
import {connect} from "react-redux";
import * as actionCreators from "../state/actionCreators";
import "./App.css";
import SmurfList from "./SmurfList";
import  SmurfForm  from "./SmurfForm";

export const App = (props) => {
  console.log("props from app", props)

  return (
    <div className="App">
        <SmurfList/>
        <SmurfForm/>
      </div>
  )
};

export default connect(state => state,actionCreators.smurfData )(App);
