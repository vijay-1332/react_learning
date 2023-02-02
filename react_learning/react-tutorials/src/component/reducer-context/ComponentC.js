import { useContext } from "react"
import { counterContext } from "./counterContext"
function ComponentC(){
   const counterCntx = useContext(counterContext)
    return(
        <div>
            <div>Component c-{counterCntx.countState}</div>
            <button onClick={()=>counterCntx.countDispatch('increment')}>increment in C</button>
        </div>
    )
}
export default  ComponentC