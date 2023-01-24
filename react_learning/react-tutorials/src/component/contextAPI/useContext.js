import { createContext } from "react";

const UserContext=createContext('Hello')
const UserProvider = UserContext.Provider
const UserConsumer=UserContext.Consumer
export {UserConsumer,UserProvider}
export {UserContext} // this is for context type only