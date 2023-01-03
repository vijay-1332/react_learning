export default function Button({value,handleClick}){
    return(
        <button className="mt-4 bg-[#4D5B9E] text-white font-serif text-md w-[193px] h-[40px] rounded-lg" onClick={handleClick}>{value}</button>
    )
}