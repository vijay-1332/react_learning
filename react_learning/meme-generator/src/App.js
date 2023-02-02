/**functional component start ##############*/
//import AirBnb from './components/airbnb/AirBnb'
//import TravelJournal from './components/travel_journal/TravelJournal'
//import MemGenerator from "./components/MemGenerator";
//import Home from "./components/counter/home";
//import Main from "./components/box/Main";
//import JokeMain from './components/jokes/Main'
//import Forms from './components/Forms/Form'
//import MainSignUP from "./components/signup_form/Index";
//import UseEffect from "./components/UesEffect/Index";
//import WindowTracker from "./components/windowTracker/WindowTracker";
//import MarkDownNotes from "./components/Markdown_notesApp/MarkDownNotesApp";
//import TenziesMain from "./components/tenzies/TenziesMain";
//import Quizzucal from "./components/quizzical/Quizzucal";
/**functional component end################## */
/**class component  start #######################*/
//import HelloWorld from './components/class-component/hello-world/HelloWorld'
//import Greetings from "./components/class-component/Greetings.js/Greetings";
// import StateMngt from "./components/class-component/StateDemo.js/StateMngt";
//import CounterMain from "./components/class-component/counter/CounterMain";
//import Form from "./components/class-component/Form/Form";
import { RouterProvider } from "react-router-dom";
//import Admin from "./components/layouts/Admin";
//import Default from "./components/layouts/Default";
import adminRoutes from './routing'
import store from './redux/store'
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={adminRoutes} />
      </Provider>

      {/* <AirBnb/> */}
      {/* <TravelJournal/> */}
      {/* <Home/> */}
      {/* <MemGenerator/> */}
      {/* <Main darkMode={true}/> */}
      {/* <JokeMain/> */}
      {/* <Forms/> */}
      {/* <MainSignUP></MainSignUP> */}
      {/* <UseEffect/> */}
      {/* <WindowTracker/> */}
      {/* <MarkDownNotes/> */}
      {/* <TenziesMain/> */}
      {/* <Quizzucal/> */}
      {/* <HelloWorld/> */}
      {/* <Greetings/> */}
      {/* <StateMngt/> */}
      {/* <CounterMain/> */}
      {/* <Form/> */}
    </div>
  );
}

export default App;
