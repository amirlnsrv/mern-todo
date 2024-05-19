import React from "react";
import { Routes, Route } from "react-router-dom";
import "./AuthPage.scss";
import Login from "../../components/Login";
import Registration from "../../components/Registration";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const AuthPage = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const { login } = React.useContext(AuthContext);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    try {
      await axios
        .post(
          "/api/auth/registration",
          { ...form },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
          alert("Вы успешно зарегистрировались!");
        });
    } catch (error) {
      console.log("Произошла ошибка", error);
      alert("Пользователь с такой почтой уже зарегистрирован");
    }
  };

  const loginHandler = async () => {
    try {
      await axios
        .post(
          "/api/auth/login",
          { ...form },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          login(response.data.token, response.data.userId);
        });
    } catch (error) {
      console.log(error);
      alert("Неверная почта или пароль!");
    }
  };

  return (
    <>
      <div className="container">
        <div className="auth-page">
          <Routes>
            <Route
              path="/login"
              element={
                <Login onChange={changeHandler} onLogin={loginHandler} />
              }
            />

            <Route
              path="/registration"
              element={
                <Registration
                  onChange={changeHandler}
                  onRegister={registerHandler}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
