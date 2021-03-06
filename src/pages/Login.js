import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmailAndPassword, loginWithGoogle } from "../actions/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginWithEmailAndPassword(email, password));
  };

  const handleLoginGoogle = () => {
    dispatch(loginWithGoogle());
  };
  return (
    <>
      <h1 className="auth__title">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block" disabled={loading}>
          {loading && <i className="fas fa-spinner fa-spin"></i>} Login
        </button>
      </form>
      <div className="google-btn mb-5" onClick={handleLoginGoogle}>
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
      <Link to="/auth/register" className="d-block text-center link">
        Create New Account
      </Link>
    </>
  );
};
