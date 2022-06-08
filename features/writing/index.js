import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emitCounterAsyncDown, emitCounterAsyncUp } from "../../redux-saga/counter/actions";
import { getCountSelector, getPendingSelector } from "../../redux-saga/counter/selectors";

const WritingIndex = (props) => {

    const dispatch = useDispatch();
    const count = useSelector(getCountSelector);
    const pending = useSelector(getPendingSelector);

    return (
        <div>
            <button onClick={() => dispatch(emitCounterAsyncDown())}>-</button>
            <div>Count: {pending ? count : 'Loading...'}</div>
            {/* <div>Count: {count}</div> */}
            <button onClick={() => dispatch(emitCounterAsyncUp())}>+</button>
        </div>
    )
}

export default WritingIndex;