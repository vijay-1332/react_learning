import { Title } from "./Title"
import Button from "./Button"
import { useState,useCallback } from "react"
function UseCallBack() {
    const [age,setAge] = useState(10)
    const [salary,setsalary] = useState(5000)
const incrementAge=useCallback(()=>{
    setAge(age+1)
},[age])
// const incrementSalary=useCallback(()=>{
//     setsalary(salary+2000)
// },[salary])
const incrementSalary=()=>{
    setsalary(preSalary=>preSalary+2000)
}

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-red-600 font-bold text-2xl">use callback hook demo</h1>
            <Title text="Age" val={age} />
            <Button text="incrementAge" handleClick={incrementAge}/>
            <Title text="Salary" val={salary} />
            <Button text="incrementSalary" handleClick={incrementSalary}/>
        </div>
    )
}
export default UseCallBack