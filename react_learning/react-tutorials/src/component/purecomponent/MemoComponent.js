import { memo } from "react"
function MemoComp(props){
    console.log('memo component......')
    console.log(props.greetings)
    return(
        <div>{props.greetings} memo component</div>
    )
}
export default memo(MemoComp)