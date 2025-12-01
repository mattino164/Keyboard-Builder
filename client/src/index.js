import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BuildProvider } from "./context/BuildContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BuildProvider>
    <App />
  </BuildProvider>
);
