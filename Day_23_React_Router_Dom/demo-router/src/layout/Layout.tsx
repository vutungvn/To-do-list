import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 bg-gray-100 flex-1">{<Outlet />}</main>
      </div>
    </div>
  );
};
