import React, {useReducer} from 'react'


const mijnReducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT': 
        return {count: state.count + 1};
        case 'DECREMENT': 
        return {count: state.count - 1};
        default: {
            return state;
        }
    }
}  


const UseReducerCounterExample = () => {
    const [state, dispatch] = useReducer(mijnReducer, {count: 0});
   return(
    <>
    <h3>Count: {state.count}</h3>
    <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>
    <button onClick={() => dispatch({type: 'DECREMENT'}) } disabled={state.count < 0}>Decrement</button>
    </>

   )
    
}

export default UseReducerCounterExample
