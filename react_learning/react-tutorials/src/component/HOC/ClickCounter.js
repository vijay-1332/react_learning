import { Component } from "react";
import hocCounter from "./HocCounter";
class ClickCounter extends Component{
    render(){
        const {counter,incrementCounter,name} ={...this.props}
        return(
            <div>
                <button onClick={incrementCounter}>{name}-click counter- {counter}</button>
            </div>
        )
    }
}export default hocCounter(ClickCounter)