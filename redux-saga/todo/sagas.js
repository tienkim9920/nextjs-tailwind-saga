import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchTodoFailure, fetchTodoSuccess } from "./actions";
import { FETCH_TODO_REQUEST } from "./actionTypes";

const getTodos = () =>
    axios.get("https://jsonplaceholder.typicode.com/todos");

function* fetchTodoSaga() {
    try {
        const response = yield call(getTodos);
        yield put(
            fetchTodoSuccess({
                todos: response.data,
            })
        );
    } catch (e) {
        yield put(
            fetchTodoFailure({
                error: e.message,
            })
        );
    }
}

function* todoSaga() {
    yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;