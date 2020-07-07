import { types } from "../types";

export const authReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.AUTH_LOGIN:
      return {
        id: payload.uid,
        name: payload.displayName,
      };
    case types.AUTH_LOGOUT:
      return {};
    default:
      return state;
  }
};
