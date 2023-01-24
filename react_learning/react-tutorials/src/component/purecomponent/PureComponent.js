import { PureComponent } from "react";
export default class PureComp extends PureComponent{
    render(){
        console.log('pure component......')
        console.log(this.props.greetings)
        return(
            <div>{this.props.greetings} pure component</div>
        )
    }


}