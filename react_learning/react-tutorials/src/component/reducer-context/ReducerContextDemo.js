import { useReducer } from "react"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import ComponentC from "./ComponentC"
import {counterContext} from './counterContext'
const count=0
const reducerFun=(state,action)=>{
switch(action){
    case 'increment':
        return state+1
    default:
    return state
}
}
function ReducerContext(){
  const [newCount,dispatch] = useReducer(reducerFun,count)  
return(
    <div>
        <div>Main counter:- {newCount}</div>
        <counterContext.Provider value={{countState:newCount,countDispatch:dispatch}}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        </counterContext.Provider>
        <button onClick={()=>dispatch('increment')}>increment</button>
    </div>
)
}
export default ReducerContext