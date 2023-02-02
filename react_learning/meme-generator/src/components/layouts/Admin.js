import AdminSideBar from './AdminSideBar'
import AdminHeader from './AdminHeader'
//import Split from 'react-split'
import { Outlet } from 'react-router-dom'
export default function Admin() {
    return (
        <div className="flex h-screen bg-gray-200">
                <AdminSideBar />
                <div className='flex-1 flex flex-col'>
                <AdminHeader/>
                <Outlet />
                </div>
        </div>
    )
}