import React from "react";
import {connect} from "react-redux";

export const Smurf = (props) => {

    console.log("props from smurf", props)

    return (
        <div key={props.smurf.id}>
            <h1>Smurf Name: {props.smurf.name}</h1>
            <h1>Smurf Age: {props.smurf.age}</h1>
            <h1>Smurf Height: {props.smurf.height}</h1>
            
        </div>
    )
}

export default connect(state => state)( Smurf);