import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {
  changeFieldsTalhao,
  changeDataTable,
  changeFieldsLogin
} from "./reducers.js";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import "tachyons";

const logger = createLogger();
const rootReducer = combineReducers({
  changeFieldsTalhao,
  changeDataTable,
  changeFieldsLogin
});
const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunkMiddleware)
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
