import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }: { children: React.ReactNode }) => {
  const isLogin = true;

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return children;
};
