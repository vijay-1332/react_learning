import { Component } from "react";

export default class Header extends Component{
    render(){
        return(
            <div className="font-bold text-xl font-serif">
                <p>Welcome, {this.props.userName}</p>
            </div>
        )
    }
}