import Joke from "./Joke";
import jokesData from '../../data/jokesData'
export default function Main(){
  const jokesElement =  jokesData.map((jokes,index)=>(
        <Joke key={index} {...jokes}/>
    ))
    return(
        <div className="p-4">
           {jokesElement}
        </div>
    )
}