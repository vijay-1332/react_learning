import { Component } from "react";
import PureComp from "./PureComponent";
import RegularComp from "./RegularComponent";
import FunctionComp from './FunctionalComp'
import MemoComp from "./MemoComponent";
export default class PureComponentDemo extends Component {
    state = {
        greetings: 'Hello ',
        items:[
            {qty:5,itemName:'pencile'},
            {qty:2,itemName:'sharpner'}
        ]
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                greetings:this.state.greetings
            })
            
        //  this.state.items.push({qty:2,itemName:'sharpner'})
        //    this.setState({
        //     items:[...this.state.items,{qty:2,itemName:'sharpner'}]
        //    })
        }, 2000)
    }
    render() {
        console.log('Main component......')
        return (
            <div>this is main Component
                <PureComp greetings={this.state.greetings} />
                <RegularComp greetings={this.state.greetings} />
                <FunctionComp greetings={this.state.greetings}/>
                <MemoComp greetings={this.state.greetings}/>
            </div>
        )

    }
}