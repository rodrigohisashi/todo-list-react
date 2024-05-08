import Todo from './Todo.jsx';
import {useContext} from "react";
import {TodosContext} from "../TodoContext.js";

function TodosList() {

    const {todos, dispatch} = useContext(TodosContext)

    return (
    <>
        <div className="todos">
            {todos.map(todo =>
                <Todo todo={todo}
                      key={todo.id}
                />)}
        </div>
    </>
  )
}

export default TodosList