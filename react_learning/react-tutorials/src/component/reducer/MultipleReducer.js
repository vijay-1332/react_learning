import { useReducer } from "react"
const counter={
    firstCounter:0,
    secondCounter:0
}
const counter2={
    firstCounter:0,
    secondCounter:0
}
const reducerFun=(state,action)=>{
    switch(action.type){
        case 'increment_1':
            return {...state,firstCounter:state.firstCounter+action.val}
        case 'increment_2':
                return {...state,secondCounter:state.secondCounter+action.val}
        default:
            return state
    }
}
function MultipleReducer(){
    const [newCounter,dispatch]= useReducer(reducerFun,counter)
    const [newCounter2,dispatch2]= useReducer(reducerFun,counter2)
    return(
       
        <div>
            <div>counter-1: {newCounter.firstCounter}</div>
            <div>counter-2: {newCounter.secondCounter}</div>
            <button onClick={()=>dispatch({type:'increment_1',val:5})}>counter 1</button> |
            <button onClick={()=>dispatch({type:'increment_2',val:10})}>counter 2</button>
            <div>counter2-1: {newCounter2.firstCounter}</div>
            <div>counter2-2: {newCounter2.secondCounter}</div>
            <button onClick={()=>dispatch2({type:'increment_1',val:5})}>counter2 1</button> |
            <button onClick={()=>dispatch2({type:'increment_2',val:10})}>counter2 2</button>
        </div>
    )
}
export default MultipleReducer