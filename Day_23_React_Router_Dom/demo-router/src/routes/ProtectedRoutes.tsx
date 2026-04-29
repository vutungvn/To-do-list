import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isLogin = true;

  if (!isLogin) {
    return <Navigate to="/signin" />;
  }

  return children;
};
