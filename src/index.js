import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

ReactDOM.render(<App />, document.getElementById("root"));

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
