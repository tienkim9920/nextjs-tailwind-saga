import { createSelector } from "reselect";

const getPending = (state) => state.counter.pending;

const getCount = (state) => state.counter.count;

export const getCountSelector = createSelector(getCount, (count) => count);

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
);
