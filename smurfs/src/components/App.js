import React, { Component } from "react";
import {connect} from "react-redux";
import * as actionCreators from "../state/actionCreators";
import "./App.css";

export const App = (props) => {
  console.log("props from app", props)

  return (
    <div className="App">
        Howdy! Smurf !
      </div>
  )
};

export default connect(state => state,actionCreators.smurfData )(App);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

