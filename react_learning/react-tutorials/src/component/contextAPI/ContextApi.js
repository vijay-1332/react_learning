import { Component } from "react";
import ComponentC from "./ComponentC";
import { UserProvider } from "./useContext";
class ContextApi extends Component{
   
    render(){
        return(
            <div>context api
                <UserProvider value={{name:"India",greetings:"Hello"}} >
                <ComponentC/>
                </UserProvider>
                
            </div>
        )
    }
 }
export default ContextApi