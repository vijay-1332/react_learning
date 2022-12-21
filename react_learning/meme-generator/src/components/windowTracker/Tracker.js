import { useEffect, useState } from "react"

export default function Tracker(){
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    console.log('component rerener')
    
    useEffect(()=>{
        function setWidth(){
            console.log('set width')
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener('resize',setWidth)
        return function(){
            console.log('cleanup')
            window.removeEventListener('resize',setWidth)
        }
    },[])
    return(
        <h1 className="text-2xl text-white font-semibold" >Window width: {windowWidth}</h1>
    )
}