import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Categories from './pages/Categories';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/products",
    element: <Products />,
  }
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);