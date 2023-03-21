import { ACTIONS } from "./ToDoList"

export default function ToDo({todo, dispatch}) {
    return(
        <div className="text-center mt-3">
            <span style={{color: todo.complete ? "lightgray" : "black"}}>{todo.name}</span>
            <button className="btn btn-secondary ms-3"
                    onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id}})}>Toggle</button>
            <button className="btn btn-danger"
                    onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: { id: todo.id}})}>Delete</button>
        </div>
    )
}