import { actionCreator } from "redux-action-creator";
import types from "./signin.constants";

export const signIn = actionCreator(types.SIGN_IN, "email", "password");
export const signInSuccess = actionCreator(
  types.SIGN_IN_SUCCESS,
  "token",
  "role"
);
export const signInFail = actionCreator(types.SIGN_IN_FAIL);
export const signOut = actionCreator(types.SIGN_OUT);
