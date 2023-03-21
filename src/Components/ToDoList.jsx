import { useReducer, useState } from "react";
import ToDo from "./ToDo";

export const ACTIONS = {
    ADD_TODO: 'addTodo',
    TOGGLE_TODO: 'toggleTodo',
    DELETE_TODO: 'deleteTodo'
}


function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                    //replace that object with one with opp completeness
                    return {...todo, complete: !todo.complete}
                } 
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo=>todo.id!==action.payload.id)

    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}


export default function ToDoList() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        //with more complex state, it is common for us to add additional state variables as something
        //called a 'payload'
        //beauty of dispatch is that we can perform many different actions on state given a single function
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('') //clears our input
        console.log(todos)
    }


    return (
        <>
            <div className="h-100 d-flex justify-content-center align-items-center">

                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="text-align-center">
                {
                    todos.map((todo) => {

                        // pass whole obj down to child
                        return (<ToDo key={todo.id} todo={todo} dispatch={dispatch}/>)
                }
                    )

                }
            </div>
        </>
    )

}

