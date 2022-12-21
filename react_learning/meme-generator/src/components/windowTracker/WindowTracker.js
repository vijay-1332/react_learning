import { useState } from "react"
import Tracker from "./Tracker"

export default function WindowTracker(){
    const [show,setShow] = useState(true)
    return(
        <div className="bg-orange-500 h-screen flex flex-col items-center justify-center space-y-5">
            <button className="bg-gray-300 px-20 py-4 rounded-lg" onClick={()=>setShow(prevShow=>!prevShow)}>Toggle WindowTracker</button>
            {show&&<Tracker/>}
        </div>
    )
}