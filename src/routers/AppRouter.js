import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { Journal } from "../pages/Journal";

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Journal} />
      <Route path="/auth" component={AuthRouter} />
      <Redirect to="/auth/login" />
    </Switch>
  </BrowserRouter>
);
