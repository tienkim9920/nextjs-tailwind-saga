import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_FAILURE,
    FETCH_TODO_SUCCESS,
} from "./actionTypes";

export const fetchTodoRequest = () => ({
    type: FETCH_TODO_REQUEST,
});

export const fetchTodoSuccess = (payload) => ({
    type: FETCH_TODO_SUCCESS,
    payload,
});

export const fetchTodoFailure = (payload) => ({
    type: FETCH_TODO_FAILURE,
    payload,
});