import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { Journal } from "../pages/Journal";
import { firebase } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { Loader } from "../components/Loader";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";
import { startLoadNotes } from "../actions/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        dispatch(startLoadNotes(user.uid))
        setLogged(true);
      } else {
        setLogged(false);
      }
      setChecking(false);
    });
  }, [dispatch]);

  if (checking) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute isLogged={isLogged} exact path="/" component={Journal} />
        <PublicRoute isLogged={isLogged} path="/auth" component={AuthRouter} />
        <Redirect to="/auth/login" />
      </Switch>
    </BrowserRouter>
  );
};
