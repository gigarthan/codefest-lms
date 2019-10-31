import { all, fork } from "redux-saga/effects";
import signInSaga from "../modules/sign-in/redux/signin.saga";

function* rootSaga() {
  yield all([fork(signInSaga)]);
}

export default rootSaga;
