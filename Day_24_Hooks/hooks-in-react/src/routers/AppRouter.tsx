import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { UseEffect } from "../page/useEffect/UseEffect";
import { ProductDetail } from "../page/useEffect/ProductDetail";
import { UseReducer } from "../page/useReducer/UseReducer";
import { Cart } from "../page/carts/Cart";
import { ReactMemo } from "../page/reactMemo/ReactMemo";
import { UseMemo } from "../page/useMemo/UseMemo";
import { UseCallback } from "../page/useCallback/UseCallback";
import { UseRef } from "../page/useRef/UseRef";
import { DemoCounter } from "../page/counter/DemoCounter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/useReducer" element={<UseReducer />} />
          <Route path="/carts" element={<Cart />} />
          <Route path="/react-memo" element={<ReactMemo />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/counter" element={<DemoCounter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
