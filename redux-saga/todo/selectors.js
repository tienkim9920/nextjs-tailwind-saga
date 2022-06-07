import { createSelector } from "reselect";

const getPending = (state) => state.todo.pending;

const getTodos = (state) => state.todo.todos;

const getError = (state) => state.todo.error;

export const getTodosSelector = createSelector(getTodos, (todos) => todos);

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error)