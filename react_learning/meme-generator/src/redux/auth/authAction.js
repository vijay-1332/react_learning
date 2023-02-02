import {AUTH_LOGIN,AUTH_LOGOUT} from './authType'
function authLogin(){
    return{
        type:AUTH_LOGIN
    }
}
function authLogOut(){
    return{
        type:AUTH_LOGOUT
    }
}