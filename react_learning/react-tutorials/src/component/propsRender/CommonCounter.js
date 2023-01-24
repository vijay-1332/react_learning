import { Component } from "react";

class CommonCounter extends Component{
    state={
        count:0
    }
    incrementCounter=()=>{
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })
    }
    render(){
        return(
            <div>{this.props.children(this.state.count,this.incrementCounter)}</div>
        )
    }
}
export default CommonCounter