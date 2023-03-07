import { UPDATE_COUNTER } from "./actionType"
const initialState={
    counter:0
}
export const counterReducer=(state=initialState,action)=>{
switch(action.type){
    case UPDATE_COUNTER:
        return{
            ...state,
            counter:state.counter+1
        }
        default:
            return{state}
}
}