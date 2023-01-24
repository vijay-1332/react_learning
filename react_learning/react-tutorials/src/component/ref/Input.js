import { Component, createRef } from "react"

export default class Input extends Component{
     inputRef=createRef()
     focusInput=()=>{
        this.inputRef.current.focus()
    }
    render(){
        return(
            <input ref={this.inputRef} />
        )
    }
    
    
}