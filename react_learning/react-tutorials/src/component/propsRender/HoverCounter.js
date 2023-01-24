import { Component } from "react";

class HoverCounter extends Component{
render(){
    const {counter,incrementCounter} = {...this.props}
    return(
        <h1 onMouseOver={incrementCounter}>Hover counter is-{counter}</h1>
    )
}
}
export default HoverCounter