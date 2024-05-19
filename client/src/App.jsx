import "./App.scss";
import Navbar from "./components/Navbar";
import { useRoutes } from "./routes";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";

function App() {
  const { login, logout, token, userId, isReady } = useAuth();
  const isLogin = !!token;
  const routes = useRoutes(isLogin);

  return (
    <AuthContext.Provider
      value={{ login, logout, token, userId, isReady, isLogin }}
    >
      <div className="app">
        <Navbar />
        {routes}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
