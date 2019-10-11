import React from "react";
import {connect} from "react-redux";

export const SmurfForm = (props) => {

    console.log("props from smurfform", props)

    return (
        <div >
            Hello from smurf form
            <form>
                <label>Name</label>
                <input type="text" name="name"/>
                <label>Age</label>
                <input type="text" name="age"/>
                <label>Height</label>
                <input type="text" name="height"/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default connect(state => state)( SmurfForm);