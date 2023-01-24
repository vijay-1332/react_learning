
export default function FunctionComp(props) {
    console.log('function component......')
    console.log(props.greetings)
    return(
        <div>{props.greetings} functional component</div>
    )
}