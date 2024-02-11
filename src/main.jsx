import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/pages/App";
import firebase from "./config/firebase";

console.log("Config Firebae ===>", firebase);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
