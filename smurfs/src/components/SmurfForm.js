import React from "react";
import { connect } from "react-redux";
import { inputSmurf, postSmurf } from "../state/actionCreators";

export const SmurfForm = props => {
  const { inputSmurf, formSmurf } = props;

  const changeValue = e => {
    inputSmurf(e.target);
  };

  const addSmurf = e => {
    e.preventDefault();
  };

  const formSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="smurf-form">
      Hello from smurf form
      <form onSubmit={formSubmit}>
        <label>Name</label>
        <input
          value={formSmurf.name}
          onChange={changeValue}
          type="text"
          name="name"
        />
        <label>Age</label>
        <input
          value={formSmurf.age}
          onChange={changeValue}
          type="text"
          name="age"
        />
        <label>Height</label>
        <input
          value={formSmurf.height}
          onChange={changeValue}
          type="text"
          name="height"
        />
        <button onClick={addSmurf}>Submit</button>
      </form>
    </div>
  );
};

export default connect(
  state => state,
  { postSmurf, inputSmurf }
)(SmurfForm);
