import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const AuthRouter = () => (
  <div className="auth__main">
    <div className="auth__box-container">
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  </div>
);
