const axios  = require('axios')
const { FETCH_USER_REQUEST, REQUEST_FAIL, REQUEST_SUCCESS } = require('./actionType')


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
const fetchUserData = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder1.typicode.com/users').then(res => {
                const users = res.data
                dispatch(requestSuccess(users))
                console.log(users)
            }).catch(err => {
                dispatch(requestFail(err))
            })
    }
}

module.exports = { fetchUserData, fetchUserRequest, requestFail, requestSuccess }