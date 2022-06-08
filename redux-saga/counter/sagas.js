import { all, delay, put, takeLatest } from "redux-saga/effects";
import { emitCounterRequestDown, emitCounterRequestUp } from "./actions";
import { COUNTER_ASYNC_DOWN, COUNTER_ASYNC_UP } from "./actionTypes";

function* counterAsyncUp() {
    yield delay(1000);
    yield put(
        emitCounterRequestUp()
    );
}

function* counterAsyncDown() {
    yield delay(1000);
    yield put(
        emitCounterRequestDown()
    )
}

function* counterSaga() {
    yield all([takeLatest(COUNTER_ASYNC_UP, counterAsyncUp)]);
    yield all([takeLatest(COUNTER_ASYNC_DOWN, counterAsyncDown)]);
}

export default counterSaga;