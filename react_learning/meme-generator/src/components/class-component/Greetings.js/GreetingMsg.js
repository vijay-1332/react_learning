import { Component } from "react";

export default class GreetingMsg extends Component{
     Greeting() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1 className="text-xl font-bold">Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
    render(){
        return(
            <div>
                 {this.Greeting()}
            </div>
        )
    }
}
