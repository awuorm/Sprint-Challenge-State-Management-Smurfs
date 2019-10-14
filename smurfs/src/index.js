import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import * as reducers from "../src/state/reducers";

const monsterReducer = combineReducers({
    smurfs: reducers.smurfReducer,
    postSmurf: reducers.postSmurfReducer,
    formSmurf: reducers.formReducer,
});

const store = createStore(
    monsterReducer,
    {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
