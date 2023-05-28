import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
);
