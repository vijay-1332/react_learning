import ClickCounter from "./ClickCounter"
import HoverCounter from "./HoverCounter.js/HoverCounter"
export default function HocDemo(){

    return(
        <div>HOC demo
          <ClickCounter name="THis click counter" incBy={5}/>
          <HoverCounter incBy={10}/>
        </div>
    )
}