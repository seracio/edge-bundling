import "unfetch/polyfill";
import { Playground } from "@seracio/plugnplay";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import * as store from "./store";

render(
  <Playground store={store}>
    <App />
  </Playground>,
  document.querySelector("#root")
);
