import Box from "./Box";
import boxes from '../../data/boxes'
import { useState } from "react";
export default function Main(props) {
    let [squares, setSquares] = useState(boxes)
    function toggle(id) {
//         setSquares(prevSquares => {
//             const newSquares = []
//             for (let i = 0; i < prevSquares.length; i++) {
//                 const currentSquare = prevSquares[i]
//                 if (currentSquare.id === id) {
//                  const updatedSquare={
//                     ...currentSquare,
//                     on:!currentSquare.on
//                  }
//                  newSquares.push(updatedSquare)
//             }else{
//                 newSquares.push(currentSquare)
//             }
// }return newSquares
//     })
setSquares(prevSquare=>{
    return prevSquare.map((square)=>{
        return square.id === id? {...square,on:!square.on}:square
    })
})
   }
const squareElement = squares.map(square => (
    <Box on={square.on} key={square.id}  handleClick={()=>toggle(square.id)}></Box>
))

return (
    <div className="h-[500px] w-[500px] p-4">
        <div className=" flex flex-wrap gap-2 ">
            {squareElement}
        </div>
    </div>

)
}