export default function Option(props) {
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
            rounded-lg ${(props.ans === props.option)?"bg-[#D6DBF5]":"bg-transparent"}` }
                onClick={props.handleClick}
            >{props.option}</button>
        </div>
    )
}