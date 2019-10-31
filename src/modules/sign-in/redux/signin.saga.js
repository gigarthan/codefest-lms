import { all, takeLeading, put, call } from "redux-saga/effects";
import types from "./signin.constants";
import { signInSuccess } from "./signin.actions";
import axios from "axios";
import jwt_decode from "jwt-decode";

function* signInSaga({ payload }) {
  const url = "http://172.16.12.189:6500/auth/user/login";
  try {
    const response = yield call(axios, {
      url: url,
      method: "POST",
      data: payload
    });

    const { access_token } = response.data;

    const decodedToken = jwt_decode(access_token);
    yield put(signInSuccess({ token: access_token, role: decodedToken.role }));
  } catch (error) {
    console.log(error);
  }
}

function* signInSagaWatcher() {
  yield takeLeading(types.SIGN_IN, signInSaga);
}

function* rootSaga() {
  yield all([signInSagaWatcher()]);
}

export default rootSaga;
