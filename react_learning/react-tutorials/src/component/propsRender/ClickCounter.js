import { Component } from "react";

class ClickCounter extends Component{
render(){
    const {counter,incrementCounter} = {...this.props}
    return(
        <button onClick={incrementCounter}>click counter -{counter}</button>
    )
}
}
export default ClickCounter