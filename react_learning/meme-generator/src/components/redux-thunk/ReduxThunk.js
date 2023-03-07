import { Component } from "react";
import { updateCounter } from "./redux/action";

export default class ReduxThunk extends Component{
    state={
        counter:0
    }
   
    render(){
        return(
            <div className="p-4 space-y-3">
            <p>count: </p>
            <button className="bg-blue-400 p-2 rounded-lg" onClick={()=>dispatchEvent(updateCounter)}>Get next record</button>
            <div>
            {/* <pre>{JSON.stringify(skywalkers, null, 5)}</pre> */}
            </div>
        </div>
        )
    }
}