import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import "./index.css";
import App from "./container/App";
import * as serviceWorker from "./serviceWorker";
import { searchReducer, fetchRobotsReducer } from "./reducer";
import "tachyons";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ searchReducer, fetchRobotsReducer });
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
