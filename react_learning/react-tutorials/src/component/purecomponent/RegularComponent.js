import { Component } from "react";

export default class RegularComp extends Component{
    render(){
        console.log('regular component......')
        console.log(this.props.greetings)
        return(
            <div>{this.props.greetings} regular component</div>
        )
    }
}