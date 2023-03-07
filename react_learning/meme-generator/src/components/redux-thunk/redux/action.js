import axios  from 'axios'
import { FETCH_USER_REQUEST, REQUEST_FAIL, REQUEST_SUCCESS,UPDATE_COUNTER } from './actionType'

const updateCounter=()=>{
    return{
        type:UPDATE_COUNTER
    }
}
const fetchUserRequest=()=> {
    return {
        type: FETCH_USER_REQUEST
    }
}
const requestFail=(err)=> {
    return {
        type: REQUEST_FAIL,
        payload: err
    }
}
const requestSuccess=(data)=> {
    return {
        type: REQUEST_SUCCESS,
        payload: data
    }
}
const fetchUserData = (counter) => {
    console.log('fetchUserData....')
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get(`https://swapi.dev/api/people/${counter}`).then(res => {
                const users = res.data
                dispatch(requestSuccess(users))
                console.log(users)
            }).catch(err => {
                dispatch(requestFail(err))
            })
    }
}
export { fetchUserData, fetchUserRequest, requestFail, requestSuccess,updateCounter }