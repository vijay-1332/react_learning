export default function Dies(props) {
    return (
        <div
        className={`flex 
        items-center 
        justify-center 
        w-[35px] 
        h-[35px] 
        text-xl 
        font-bold 
        border-2 
        rounded-md 
        drop-shadow-md
        cursor-pointer
        ${props.die.isHeld?"bg-green-300":"bg-white"}`
        }
        onClick={props.handleClick}
        >
            {props.die.value}
        </div>
    )
}