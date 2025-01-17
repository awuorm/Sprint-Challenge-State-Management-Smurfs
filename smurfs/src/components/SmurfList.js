import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

export const SmurfList = props => {
  return (
    <div className="SmurfList">
      <h1> Welcome to the smurfVillage!</h1>
      <div className="Smurfs">
      {props.smurfs.smurfData.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
          ))}
      </div>
    </div>
  );
};

export default connect(state => state)(SmurfList);
