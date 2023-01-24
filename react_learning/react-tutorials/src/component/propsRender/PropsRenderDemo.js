import { Component } from "react";
import CommonCounter from "./CommonCounter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
class PropsRender extends Component{
    
    render(){
        return(
            <div>props render
                <CommonCounter >
                {(count,incrementCounter)=>(<ClickCounter counter={count} incrementCounter={incrementCounter}/>)}
                </CommonCounter>
                <CommonCounter>
                {(count,incrementCounter)=>(<HoverCounter counter={count} incrementCounter={incrementCounter}/>)}
                </CommonCounter>
            </div>
        )
    }
}
export default PropsRender