import React from "react";

export const useAuth = () => {
  const [token, setToken] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  const [isReady, setIsReady] = React.useState(false);

  const login = React.useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
  });

  const logout = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  };

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data && data.token) {
      login(data.token, data.userId);
    }
    setIsReady(true);
  }, [login]);

  return { login, logout, token, userId, isReady };
};
