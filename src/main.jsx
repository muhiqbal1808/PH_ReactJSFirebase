import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./index.css";

import { router } from "./routes";
import { storeRedux } from ".../../config/redux";

import analytics from "./config/firebase";
console.log("Config Firebae ===>", analytics);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
