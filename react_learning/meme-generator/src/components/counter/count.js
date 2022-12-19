export default function Count(props){
    return(
        <div className="flex items-center justify-center h-40 w-40 rounded-full bg-blue-300 text-2xl font-semibold">
            {props.countVal}
        </div>
    )
}