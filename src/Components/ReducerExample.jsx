
import { useReducer, useState } from "react";

//Smart way to ensure we don't mispell stuff in vscode since it will autocomplete for us
//Also we can change the commands here and it will persist throughout the app without breaking any functionality
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}


//Takes most up to date state (we don't need to pass that)
//and an action (specified by programmer)
function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.INCREMENT:
            return {count: state.count + 1};
        case ACTIONS.DECREMENT:
            return {count: state.count - 1};
        default:
            return state;
    }
}


export default function ReducerExample() {

    // With State:
    const [count, setCount] = useState(0)

    function decrement(){
        setCount((prevCount) => prevCount-1)
    }

    function increment(){
        setCount((prevCount) => prevCount+1)
    }


    //End With state


    // Start With Reducer

    //We pass it a reducer function and an initial value
    //generally use objects instead of straight up values because you tend to be using
    //reducers with much more complex scenarios

    //It returns the current state and a function called dispatch that we can call to run
    //operations in our reducer function that manipulate state
    const [state, dispatch] = useReducer(reducer, {count: 0})

    //End with Reducer code
    
    return (
        // <div className="h-100 d-flex justify-content-center align-items-center">
        //     <button 
        //         className="btn btn-danger" 
        //         onClick={decrement}
        //         style={{fontSize:'2em'}}
        //     >-</button>
        //     <span style={{fontSize:'2em'}}>{count}</span>
        //     <button 
        //         className="btn btn-primary" 
        //         style={{fontSize:'2em'}}
        //         onClick={increment}
        //     >+</button>
        // </div>
        <div className="h-100 d-flex justify-content-center align-items-center">
            <button 
                className="btn btn-danger" 
                onClick={() => dispatch({type: "decrement"})}
                style={{fontSize:'2em'}}
            >-</button>
            <span style={{fontSize:'2em'}}>{state.count}</span>
            <button 
                className="btn btn-primary" 
                style={{fontSize:'2em'}}
                onClick={() => dispatch({type: "increment"})}
            >+</button>
        </div>
    )
}