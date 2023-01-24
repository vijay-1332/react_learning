import RefClassComp from "./RefClassComp"
import RefFunctionComo from "./RefFunctionComp"
import Input from "./Input"
import { Component, createRef } from "react"
export default class RefDemo extends Component{
    inputCompRef=createRef()
    componentDidMount(){
        console.log(this.inputCompRef)
        this.inputCompRef.current.focusInput()
    }
    render(){
        return(
            <div>ref demo
                <RefClassComp/>
                <RefFunctionComo/>
                <Input ref={this.inputCompRef}/>
            </div>
        )
    }
    

    
}