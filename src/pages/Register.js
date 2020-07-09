import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { setError, removeError } from "../actions/ui";
import { registerWithEmailAndPassword } from "../actions/auth";

export const Register = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [values, handleInputChange] = useForm({
    name: "Test 1",
    email: "test1@gmail.com",
    password: "123456",
    confirmPassword: "123456",
  });

  const { name, email, password, confirmPassword } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
    if (validForm()) {
      dispatch(registerWithEmailAndPassword(email, password, name));
    }
  };

  const validForm = () => {
    if (name.trim().length <= 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is invalid"));
      return false;
    } else if (password !== confirmPassword || password.trim().length < 6) {
      dispatch(
        setError(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h1 className="auth__title">Register</h1>
      {msgError && <div className="auth__form-error">{msgError}</div>}

      <form className="mb-5" onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
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
        <input
          className="auth__input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block">Register</button>
      </form>
      <Link to="/auth/login" className="d-block text-center link">
        Login
      </Link>
    </>
  );
};
