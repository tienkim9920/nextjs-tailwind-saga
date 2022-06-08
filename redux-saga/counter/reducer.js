import { COUNTER_ASYNC_DOWN, COUNTER_ASYNC_UP, COUNTER_REQUEST_DOWN, COUNTER_REQUEST_UP } from "./actionTypes";

const initialState = {
    pending: true,
    count: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_ASYNC_UP:
            return {
                ...state,
                pending: false
            };
        case COUNTER_ASYNC_DOWN:
            return {
                ...state,
                pending: false
            };
        case COUNTER_REQUEST_UP:
            return {
                count: state.count + 1,
                pending: true,
            };
        case COUNTER_REQUEST_DOWN:
            return {
                count: state.count - 1,
                pending: true,
            };
        default:
            return {
                ...state,
            };
    }
};