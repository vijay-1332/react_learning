import { useState, useEffect } from 'react'
export default function Option(props) {
    const [highlightAns, setHighlightAns] = useState("bg-transparent]")
    useEffect(() => {
        setHighlightAns(() => {
            if (props.isAnsLocked) {
                if ((props.option === props.correctAns)) {
                    return "bg-[#94D7A2]"
                } else {
                    if(props.ans === props.option){
                        return "bg-[#F8BCBC]"
                    }
                }
            } else {
                if (props.ans === props.option) {
                    return "bg-[#D6DBF5]"
                } else {
                    return "bg-bg-transparent"
                }
            }

        })
    }, [props.isAnsLocked, props.ans, props.correctAns, props.option])
    return (
        <div>
            <button
                className={`whitespace-nowrap
                m-2 
            font-serif 
            text-sm 
            hover:bg-[#4D5B9E] 
            text-[#293264] 
            font-semibold 
            hover:text-white 
            py-1 
            px-4 
            border 
            border-[#4D5B9E] 
            hover:border-transparent 
            rounded-lg ${highlightAns}`}
                onClick={props.handleClick}
            >{props.option}</button>
        </div>
    )
}