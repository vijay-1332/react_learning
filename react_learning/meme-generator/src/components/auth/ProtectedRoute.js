import { Navigate } from "react-router-dom";
import { useSelector} from 'react-redux';
import {authStatus} from '../../redux/auth/authReducer'
function ProtectedRoute({children}){
const auth = useSelector(authStatus);
console.log(auth)
if(!auth){    
    return <Navigate to="/signUp"/>
}
return children
}
export default ProtectedRoute