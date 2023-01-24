import { forwardRef } from "react"
const FRInput = forwardRef((_prop,inputRef) => {
    return (
        <div>
            <input placeholder="enter input" ref={inputRef} />
        </div>
    )
})
export default FRInput



