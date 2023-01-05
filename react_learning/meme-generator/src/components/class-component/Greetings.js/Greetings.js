import { Component } from "react";
import Header from "./Header";
import GreetingMsg from "./GreetingMsg";
export default class Greetings extends Component{
 render()   {
    return(
        <div className="flex flex-col bg-green-100 h-screen p-10">
            <Header userName="Mr. Shriman"/>
            <GreetingMsg/>
        </div>
    )
 }
}