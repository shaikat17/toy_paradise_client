import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import CommonLayout from "./Layouts/CommonLayout.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import AddToy from "./Pages/AddToy.jsx";
import { AppAuthContextProvider } from "./context/AppAuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/add-toy",
    element: <CommonLayout />,
    children: [
      {
        path: "/add-toy",
        element: <AddToy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppAuthContextProvider>
      <RouterProvider router={router} />
    </AppAuthContextProvider>
  </React.StrictMode>
);
