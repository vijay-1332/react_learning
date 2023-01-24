import { Component } from "react";
const hocCounter = WrappedComponent => {
    class HocCounter extends Component {
        state = {
            counter: 0
        }
        incrementCounter = () => {
            this.setState(prevState => {
                return {
                    counter: prevState.counter + this.props.incBy
                }
            })
        }
        render() {
            return (
                <WrappedComponent counter={this.state.counter} incrementCounter={this.incrementCounter} {...this.props}/>
            )
        }
    }
    return HocCounter
}
export default hocCounter