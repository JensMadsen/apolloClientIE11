import "core-js/stable";
import "regenerator-runtime/runtime";

import ReactDOM from "react-dom";
import App from "./app";

import { test } from "./test";

test();
ReactDOM.render(<App />, document.querySelector("#root"));
