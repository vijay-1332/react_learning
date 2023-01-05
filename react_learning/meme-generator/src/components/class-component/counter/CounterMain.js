import { Component } from "react";
import Counter from "./Counter";
export default class CounterMain extends Component {
    state={
        count:0
    } 
    
    render(){
        return (
            <div className="flex items-center justify-center p-4 h-screen">
                <button className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-600 text-white text-4xl"
                onClick={()=>this.setState(prevState=>({count:prevState.count+1}))}>+</button>
                <Counter countVal={this.state.count} />
                <button className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-600 text-white text-4xl"
                onClick={()=>this.setState(prevState=>({count:prevState.count-1}))}>-</button>
            </div>
    
        )
    }
   
}
