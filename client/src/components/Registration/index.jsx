import React from "react";
import { Link } from "react-router-dom";

const Registration = ({ onChange, onRegister }) => {
  return (
    <>
      <h3>Регистрация</h3>
      <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="email"
              name="email"
              className="validate"
              onChange={onChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
            <input
              type="password"
              name="password"
              className="validate"
              onChange={onChange}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <button
            className="wawes-effect wawes-light btn blue"
            onClick={onRegister}
          >
            Зарегистрироваться
          </button>
          <Link to="/auth/login" className="btn-outline btn-reg">
            Уже есть аккаунт?
          </Link>
        </div>
      </form>
    </>
  );
};

export default Registration;
