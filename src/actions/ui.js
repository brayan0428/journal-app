import { types } from "../types";

export const setError = (msg) => ({
  type: types.UI_SET_ERROR,
  payload: msg,
});

export const removeError = () => ({
  type: types.UI_REMOVE_ERROR,
});

export const handleLoading = (show) => ({
  type: show ? types.UI_INIT_LOADING : types.UI_STOP_LOADING,
});
