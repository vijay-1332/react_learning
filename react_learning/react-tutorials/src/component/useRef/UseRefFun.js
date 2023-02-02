import { useEffect, useRef, useState } from "react"

function UseRefFun() {
    const [counter, setCounter] = useState(0)
    const interTimerRef = useRef()
    useEffect(() => {
        interTimerRef.current = setInterval(() => {
            setCounter(prevCounter=> prevCounter+1
            )
        }, 1000)
        return ()=>{
            clearInterval(interTimerRef.current)
        }
    }, [])
    return (
        <div>
            <div className="flex space-x-2">
                <p>timer {counter}</p>
                <button className="bg-blue-600 text-white font-bold p-2 rounded-lg" onClick={() => clearInterval(interTimerRef.current)}>stop timer</button>
            </div>
        </div>
    )
}
export default UseRefFun