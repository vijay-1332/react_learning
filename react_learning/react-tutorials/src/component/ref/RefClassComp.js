import { Component, createRef } from "react";

export default class RefClassComp extends Component{
    fNameInputRef = createRef()
    componentDidMount(){
        this.fNameInputRef.current.focus()
    }
   handleOnChange=()=>{
//console.log(this.fNameInputRef.current.value)
    }
 render(){
    
    return(
        <div>class component
            <input type="text" ref={this.fNameInputRef} placeholder="enter input" onChange={this.handleOnChange}/>
            
        </div>
    )
 }
}