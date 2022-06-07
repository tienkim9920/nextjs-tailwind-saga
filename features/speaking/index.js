import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getErrorSelector, getPendingSelector, getTodosSelector } from "../../redux-saga/todo/selectors";
import { fetchTodoRequest } from "../../redux-saga/todo/actions";

const SpeakingIndex = (props) => {

    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const todos = useSelector(getTodosSelector);
    const error = useSelector(getErrorSelector);

    useEffect(() => {
        dispatch(fetchTodoRequest());
    }, []);

    return (
        <div style={{ padding: "15px" }}>
            {pending ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error</div>
            ) : (
                todos.map((todo, index) => (
                    <div style={{ marginBottom: "10px" }} key={todo.id}>
                        {++index}. {todo.title}
                    </div>
                ))
            )}
        </div>
    )
}

export default SpeakingIndex;