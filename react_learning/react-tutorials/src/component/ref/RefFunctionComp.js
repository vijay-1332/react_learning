import { useRef } from "react"

export default function RefFunctionComo(){
    const fNameInputRef = useRef()
    function handleOnChange(){
       // console.log('this is from function component')
       // console.log(fNameInputRef.current.value)
    }
    return(
        <div>ref function
             <input type="text" ref={fNameInputRef} placeholder="enter input from function" onChange={handleOnChange}/>
        </div>
    )
}