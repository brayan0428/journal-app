import { types } from '../types';

export const setError = (msg) => ({
  type: types.UI_SET_ERROR,
  payload: msg
})

export const removeError = () => ({
  type: types.UI_REMOVE_ERROR
})