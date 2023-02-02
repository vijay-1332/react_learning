import { FaPowerOff } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {AUTH_LOGOUT} from '../../redux/auth/authReducer'
import {useNavigate} from 'react-router-dom'
export default function AdminHeader() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function handleLogoutAction(){
        dispatch(AUTH_LOGOUT())
        navigate("/") 
    }
    return (
        <div>
            <div className="bg-white border-b-4 border-blue-700 flex justify-between items-center px-6 py-4">
                <div className="flex items-center">
                    <button>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
                
            </div>
            <div className="flex items-center">
                <button className="flex items-center mx-4 text-gray-600" onClick={handleLogoutAction}><FaPowerOff/></button>
                <div className="h-10 w-10 text-gray-200 font-semibold bg-blue-600 flex items-center justify-center rounded-full">VR</div>
            </div>
        </div>
        </div >
    )
}