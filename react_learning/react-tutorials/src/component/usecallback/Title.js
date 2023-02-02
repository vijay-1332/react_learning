export function Title(props){
    console.log(props.text)
    return(
        <div className="flex">
            <h1 className="font-bold font-serif">{props.text}: </h1>
            <p>{props.val}</p>
        </div>
    )
}