import { Component } from "react";
import { UserContext } from "./useContext";
//import { UserConsumer, UserContext } from "./useContext";
export default class ComponentA extends Component{
    static contextType = UserContext
    render(){
        return(
            <div>
                {this.context.name}-{this.context.greetings}
            </div>
        )
    }
    
}
//NOTE context type not work with funciton component
// export default function ComponentA(){
//     return(
//         <div>
//             <UserConsumer>
//                 {({name,greetings})=>{
//                      return <div>component A {greetings} {name}</div>
//                 }}
//             </UserConsumer>
//         </div>
//     )
// }
