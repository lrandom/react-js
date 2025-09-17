import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import Signup from './pages/Signup';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);