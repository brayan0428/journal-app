import React from "react";
import { Link } from "react-router-dom";

export const Register = () => (
  <>
    <h1 className="auth__title">Register</h1>
    <form className="mb-5">
      <input
        autoComplete="off"
        className="auth__input"
        type="text"
        name="name"
        placeholder="Name"
      />
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
      <input
        className="auth__input"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      <button className="btn btn-primary btn-block">Register</button>
    </form>
    <Link to="/auth/login" className="d-block text-center link">
      Login
    </Link>
  </>
);
