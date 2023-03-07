import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";
import { counterReducer } from "./counterReudcer";
export const rootReducer = combineReducers({
    user:apiReducer,
    cpunter:counterReducer
})
