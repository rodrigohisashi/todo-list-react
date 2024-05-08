import './Todo.scss';
import {useContext} from "react";
import {TodosContext} from "../TodoContext.js";

function Todo({todo}) {

    const {todos, dispatch} = useContext(TodosContext)
    function toggleIsDoneHandler(id) {
        dispatch({
            type: 'toggledIsDone',
            id: id
        });
    }


    function deleteHandler(id) {
        if (window.confirm('Are you sure you want to delete the todo?')) {
            dispatch({
                type: 'deleted',
                id: id
            });
        }
    }

  return (
    <>
        <div className={`todo ${todo.isDone ? 'done' : ''}`}>
            <button
                onClick={() => deleteHandler(todo.id)}
                className="erase">x erase</button>
            <h3>
                {todo.title}
            </h3>
            <p>
                {todo.description}
            </p>
            <div className="task-check">
                <input
                    onClick={() => toggleIsDoneHandler(todo.id)}
                    type="checkbox"
                    checked={todo.isDone} />
                <label>
                    {!todo.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo