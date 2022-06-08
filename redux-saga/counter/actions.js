import { COUNTER_ASYNC_DOWN, COUNTER_ASYNC_UP, COUNTER_REQUEST_DOWN, COUNTER_REQUEST_UP } from "./actionTypes";

export const emitCounterRequestUp = () => ({
    type: COUNTER_REQUEST_UP,
});

export const emitCounterRequestDown = () => ({
    type: COUNTER_REQUEST_DOWN,
})

export const emitCounterAsyncUp = () => ({
    type: COUNTER_ASYNC_UP,
})

export const emitCounterAsyncDown = () => ({
    type: COUNTER_ASYNC_DOWN,
})