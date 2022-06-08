import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Middleware
const localStorageMiddleware = ({getState}) => { // <--- FOCUS HERE
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(
            getState()
        ));
        return result;
    };
};

// Mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, localStorageMiddleware));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;