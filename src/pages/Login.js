import React from "react";
import { Link } from "react-router-dom";

export const Login = () => (
  <>
    <h1 className="auth__title">Login</h1>
    <form>
      <input
        autoComplete="off"
        className="auth__input"
        type="text"
        name="email"
        placeholder="Email"
      />
      <input
        className="auth__input"
        type="password"
        name="password"
        placeholder="Password"
      />
      <button className="btn btn-primary btn-block">Login</button>
    </form>
    <div className="google-btn mb-5">
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
