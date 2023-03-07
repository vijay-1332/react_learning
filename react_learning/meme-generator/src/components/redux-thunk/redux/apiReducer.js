import {FETCH_USER_REQUEST,REQUEST_FAIL,REQUEST_SUCCESS} from  './actionType'
const initialState = {
    user: [],
    loader: false,
    err: ''
}

export const apiReducer=(state=initialState,action)=>{
// eslint-disable-next-line default-case
switch(action.type){
    case FETCH_USER_REQUEST:return{
        ...state,
        loader:true
    }
    case REQUEST_SUCCESS:return{
        ...state,
        loader:false,
        user:action.payload,
        err:''
    }
    case REQUEST_FAIL:return{
        ...state,
        loader:false,
        user:[],
        err:''   
    }
    default:
        return state
}
}

