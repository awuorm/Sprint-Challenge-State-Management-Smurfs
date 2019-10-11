import React from "react";
import {connect} from "react-redux";
import  Smurf  from "./Smurf";

export const SmurfList = (props) => {

    console.log("props from smurflist", props)

    return (
        <div>Hello from Smurflist!
            {props.smurfs.smurfData.map((smurf) => <Smurf key={smurf.id} smurf={smurf}/>)}
        </div>
    )
}

export default connect(state => state)( SmurfList);