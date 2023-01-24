import { Component } from "react";
import hocCounter from "../HocCounter";
class HoverCounter extends Component{
    render(){
        const {counter,incrementCounter,name} ={...this.props}
        return(
            <div onMouseOver={incrementCounter}>{name}-Hover counter- {counter}</div>
        )
    }
}
export default hocCounter(HoverCounter)