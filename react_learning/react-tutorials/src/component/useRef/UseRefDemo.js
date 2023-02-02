//purpose: illustrate second use case of use ref 
//which is create container that hold immutable value which
//does not casues render
import UseRefClass from "./UseRefClass"
import UseRefFun from "./UseRefFun"
function UseRefDemo() {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <UseRefClass />
            <UseRefFun />
        </div>
    )
}
export default UseRefDemo