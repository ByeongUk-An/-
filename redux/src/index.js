import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";

let store = createStore(todoApp);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);