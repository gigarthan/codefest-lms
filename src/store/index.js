import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

/** @todo add reducers and middleware */
export const configureStore = () => {
  const dummy = function*() {
    yield console.log("run");
  };
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(() => {}, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(dummy);
  return store;
};
