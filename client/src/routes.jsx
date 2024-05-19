import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./components/Login";
import AuthPage from "./pages/AuthPage";

export const useRoutes = (isLogin) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLogin) {
      navigate("/");
    } else {
      navigate("/auth/login");
    }
  }, [isLogin]);

  return (
    <Routes>
      {isLogin ? (
        <Route path="/" element={<MainPage />} />
      ) : (
        <Route path="/auth/*" element={<AuthPage />} />
      )}
    </Routes>
  );
};
