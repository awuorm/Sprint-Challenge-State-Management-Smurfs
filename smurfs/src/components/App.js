import React, { useEffect } from "react";
import { connect } from "react-redux";
import { smurfData, postSmurf } from "../state/actionCreators";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

export const App = props => {
  useEffect(() => {
    props.smurfData();
    props.postSmurf(props.formSmurf);
  }, [props.smurfs.smurfData]);

  return (
    <div className="App">
      Welcome to the smurfVillage!
      <SmurfList />
      <SmurfForm />
    </div>
  );
};

export default connect(
  state => state,
  { smurfData, postSmurf }
)(App);
