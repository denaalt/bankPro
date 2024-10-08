import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/data/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/Users";
import Transaction from "./components/Transaction";
import Profile from "./components/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Users",
        element: <Users />,
      },
      {
        path: "/transactions",
        element: <Transaction />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default router;
