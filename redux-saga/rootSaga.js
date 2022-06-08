import { all, fork } from "redux-saga/effects";

import todoSaga from "./todo/sagas";
import counterSaga from "./counter/sagas"

export function* rootSaga() {
  yield all([fork(todoSaga)]);
  yield all([fork(counterSaga)]);
}