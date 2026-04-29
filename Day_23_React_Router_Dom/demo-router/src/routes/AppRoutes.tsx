import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Dashboard } from "../page/dashboard/Dashboard";
import { Users } from "../page/users/Users";
import { Bookings } from "../page/bookings/Bookings";
import { Cabins } from "../page/cabins/Cabins";
import { Signin } from "../page/signin/Signin";
import { Signup } from "../page/signup/Signup";
import { ListProduct } from "../page/products/ListProduct";
import { DetailProduct } from "../page/products/DetailProduct";
import { DetailProduct1 } from "../page/products/DetailProduct1";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoutes>
              <Layout />
            </ProtectedRoutes>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/products" element={<ListProduct />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/products/detail" element={<DetailProduct1 />} />
        </Route>
        <Route
          path="/signin"
          element={
            <PublicRoutes>
              <Signin />
            </PublicRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoutes>
              <Signup />
            </PublicRoutes>
          }
        />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
