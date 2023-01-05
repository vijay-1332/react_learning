import { Component } from "react";

export default class StateMngt extends Component{
    state={
        goOut:"No"
    }
    toogleState=()=>{
        this.setState(prestate=>{
            return {
                goOut:prestate.goOut==="Yes"?"No":"Yes"
            }
        })
    }
    render(){
        return (
            <div className="bg-black h-screen flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl">Should I go out tonight?</h1>
                <div className="curs bg-white w-[100px] h-[100px] rounded-full flex items-center justify-center mt-4" onClick={this.toogleState}>
                    <h1 className="text-4xl font-bold">{this.state.goOut}</h1>
                </div>
            </div>
        )
    }
}