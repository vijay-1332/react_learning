export default function Button(props){
    console.log(props.text)
    return(
        
        <div>
            <button className="bg-blue-600 text-white p-2 rounded-lg" onClick={props.handleClick}>{props.text}</button>
        </div>
    )
}