import { useState } from "react"
import Count from "./count"
export default function Home() {
    let [count, setCount] = useState(0)
    return (
        <div className="flex items-center justify-center p-4 h-screen">
            <button className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-600 text-white text-4xl"
            onClick={()=>setCount(prevCount=>prevCount+1)}>+</button>
            <Count countVal={count} />
            <button className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-600 text-white text-4xl"
            onClick={()=>setCount(prevCount=>prevCount-1)}>-</button>
        </div>

    )
}