import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isLogged, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isLogged ? <Component {...props} /> : <Redirect to="/auth/login" />
    }
  />
);
