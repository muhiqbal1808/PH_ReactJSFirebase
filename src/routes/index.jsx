import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../containers/Layout/RootLayout";

// import App from "../containers/pages/App";
import Dashboard from "../containers/pages/Dashboard";
import Login from "../containers/pages/Login";
import Register from "../containers/pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
