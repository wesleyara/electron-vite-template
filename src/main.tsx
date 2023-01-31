import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import "./styles/globals.scss";
import "./styles/typography.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

postMessage({ payload: "removeLoading" }, "*");
