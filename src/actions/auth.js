import { types } from "../types";
import { firebase, googleAuthProvider } from "../firebase/config";
import { handleLoading } from "./ui";
import Swal from "sweetalert2";
import { notesLogout } from "./notes";

export const loginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(handleLoading(true));
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(handleLoading(false));
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        dispatch(handleLoading(false));
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const loginWithGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        dispatch(handleLoading(false));
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const registerWithEmailAndPassword = (email, password, name) => {
  return (dispatch) => {
    dispatch(handleLoading(true));
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });
        dispatch(handleLoading(false));
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        dispatch(handleLoading(false));
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(notesLogout())
  };
};

export const login = (uid, displayName) => ({
  type: types.AUTH_LOGIN,
  payload: { uid, displayName },
});

export const logout = () => ({
  type: types.AUTH_LOGOUT,
});
