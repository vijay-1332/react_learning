import { Component } from "react";

export default class Counter extends Component{
    render(){
        return(
            <div className="flex items-center justify-center h-40 w-40 rounded-full bg-blue-300 text-2xl font-semibold">
                {this.props.countVal}
            </div>
        )
    }
    
}