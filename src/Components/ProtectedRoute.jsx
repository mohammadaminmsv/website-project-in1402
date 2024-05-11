import React from "react";
import { useLocation, Navigate } from "react-router";

const ProtectedRoute = ({ children, userInfoData }) => {
  const location = useLocation();

  if (userInfoData.totalEnter == 0) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }else {
    return children
  }
  return <></>;
};

export default ProtectedRoute;
