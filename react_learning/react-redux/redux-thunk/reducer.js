const {FETCH_USER_REQUEST,REQUEST_FAIL,REQUEST_SUCCESS} =require('./actionType')
const initialState = {
    user: [],
    loader: false,
    err: ''
}

const reducer=(state=initialState,action)=>{
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
}
}
module.exports={reducer}