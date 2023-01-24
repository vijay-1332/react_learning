import { Component, createRef } from "react";
import FRInput from "./FRInput";
export default class ForwardInput extends Component {
    inputRef = createRef()
    clickhandler=()=>{
     console.log(this.inputRef.current.value)
    }
    render() {
        return (
            <div>this is parent
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickhandler}>Click Me</button>
            </div>
        )

    }
}