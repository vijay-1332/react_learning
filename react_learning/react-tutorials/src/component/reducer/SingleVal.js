import { useReducer } from "react"

export default function SingleVal(){
    const initialState=0
    const reducer=(state,action)=>{
     switch (action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return state=initialState 
        default:
        return state
     }
    }
    const [count,dispatch]=useReducer(reducer,initialState)
    return(
        <div><div>counter: {count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button> |
            <button onClick={()=>dispatch('decrement')}>decrement</button> | 
            <button onClick={()=>dispatch('reset')}>reset</button>
        </div>
    )
}