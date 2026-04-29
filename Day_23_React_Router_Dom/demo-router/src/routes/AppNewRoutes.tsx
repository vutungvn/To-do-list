import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Dashboard } from "../page/dashboard/Dashboard";
import { Users } from "../page/users/Users";
import { Bookings } from "../page/bookings/Bookings";
import { Cabins } from "../page/cabins/Cabins";
import { ListProduct } from "../page/products/ListProduct";
import { DetailProduct } from "../page/products/DetailProduct";
import { DetailProduct1 } from "../page/products/DetailProduct1";
import { Signin } from "../page/signin/Signin";
import { Signup } from "../page/signup/Signup";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/cabins",
        element: <Cabins />,
      },
      {
        path: "/products",
        element: <ListProduct />,
        loader: async () => {
          const res = await fetch("https://dummyjson.com/products");
          return res.json();
        },
      },
      {
        path: "/products/:id",
        element: <DetailProduct />,
      },
      {
        path: "/products/detail",
        element: <DetailProduct1 />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
