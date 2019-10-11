import React, { useEffect } from "react";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";
import { smurfData, postSmurf } from "../state/actionCreators";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

export const App = props => {
  const {formSmurf, smurfData, smurfs, postSmurf} = props;
  useEffect(() => {
   smurfData();
   postSmurf(formSmurf);
  },[smurfs.smurfData]);

  return (
    <div className="App">
      <SmurfList />
      <SmurfForm />
    </div>
  );
};

export default connect(
  state => state,
  { smurfData, postSmurf }
)(App);
