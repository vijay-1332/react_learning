import { Component } from "react"

class UseRefClass extends Component {
    state={
        counter:0
    }
    componentDidMount(){
        this.intervalTimer= setInterval(()=>{
           this.setState((prevState)=>{
            return {
                counter:prevState.counter+1
            }
           })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervalTimer)
    }
    render() {
        return (
            <div className="flex space-x-2">
                <p>timer {this.state.counter}</p>
                <button className="bg-blue-600 text-white font-bold p-2 rounded-lg" onClick={()=>clearInterval(this.intervalTimer) }>stop timer</button>
            </div>
        )
    }
}
export default UseRefClass