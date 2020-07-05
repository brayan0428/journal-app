import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const AuthRouter = () => (
  <>
    <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/register" component={Register} />
    <Redirect to="/auth/login" />
  </>
);
