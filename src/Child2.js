import React, { useReducer } from "react";
import CounterReducer from './CounterReducer'

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer, 1);

    
    return(
        <div>
            <h2>This is a Second child using Counter Reducer</h2>
            <h3> Value of reducer is : {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default Child2