import { types } from "../types";

export const loginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123456, "Brayan Llanos"));
    }, 3000);
  };
};
export const login = (uid, displayName) => ({
  type: types.AUTH_LOGIN,
  payload: { uid, displayName },
});
