import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { UseEffect } from "../page/useEffect/UseEffect";
import { ProductDetail } from "../page/useEffect/ProductDetail";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/useReducer" element={<h1>UseReducer</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
