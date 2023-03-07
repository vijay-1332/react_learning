import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { apiReducer } from './useReducer'
const rootReducer = combineReducers({
    cnt: counterReducer,
    skywalker:apiReducer
})
export default rootReducer