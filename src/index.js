import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = <h1>Hello World</h1>;
root.render(<App />);
