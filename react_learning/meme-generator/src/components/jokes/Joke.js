import { useState } from "react"
export default function Joke(props) {
    const [isShown, setIsShown] = useState(false)
    return (
        <div className="flex flex-col mt-4">
            {props.setup && <h3 className="font-semibold text-2xl">{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button className="flex items-center justify-center bg-blue-500 w-[200px] text-white font-semibold py-1 px-2 rounded-xl"
            onClick={()=>setIsShown(prevIsShow=>!prevIsShow)}>{isShown?"hide":"show"} punchline</button>
            <hr />
        </div>
    )
}