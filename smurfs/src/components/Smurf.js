import React from "react";
import { connect } from "react-redux";
import smurf_img from "../imgs/smurf_img.png";

export const Smurf = props => {
  return (
    <div className="smurf" key={props.smurf.id}>
        <img src={smurf_img} />
      <h1>Smurf Name: {props.smurf.name}</h1>
      <h1>Smurf Age: {props.smurf.age}</h1>
      <h1>Smurf Height: {props.smurf.height}</h1>
    </div>
  );
};

export default connect(state => state)(Smurf);
