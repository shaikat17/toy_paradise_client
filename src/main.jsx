import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import CommonLayout from "./Layouts/CommonLayout.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import AddToy from "./Pages/AddToy.jsx";
import { AppAuthContextProvider } from "./context/AppAuthContext";
import Blog from "./Pages/Blog";
import AllToys from "./Pages/AllToys";
import MyToys from "./Pages/MyToys";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserDetails from "./Pages/UserDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        element: <PrivateRoute><AddToy /></PrivateRoute>,
      },
    ],
  },
  {
    path: "/blog",
    element: <CommonLayout />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/all-toys",
    element: <CommonLayout />,
    children: [
      {
        path: "/all-toys",
        element: <AllToys />,
      },
    ],
  },
  {
    path: "/my-toys",
    element: <CommonLayout />,
    children: [
      {
        path: "/my-toys",
        element: <PrivateRoute><MyToys /></PrivateRoute>,
      },
    ],
  },
  {
    path: "/login",
    element: <CommonLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    element: <CommonLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/userdetails",
    element: <CommonLayout />,
    children: [
      {
        path: "/userdetails",
        element: <PrivateRoute><UserDetails /></PrivateRoute>,
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
