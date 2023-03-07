// import {
//     createBrowserRouter,
//   } from "react-router-dom";
import {
  createBrowserRouter, createRoutesFromElements, Route,
} from "react-router-dom";
import AirBnb from '../components/airbnb/AirBnb'
import TravelJournal from '../components/travel_journal/TravelJournal'
import MemGenerator from "../components/MemGenerator";
import Home from "../components/counter/home";
import Main from "../components/box/Main";
import JokeMain from '../components/jokes/Main'
import Forms from '../components/Forms/Form'
import MainSignUP from "../components/signup_form/Index";
import UseEffect from "../components/UesEffect/Index";
import WindowTracker from "../components/windowTracker/WindowTracker";
import MarkDownNotes from "../components/Markdown_notesApp/MarkDownNotesApp";
import TenziesMain from "../components/tenzies/TenziesMain";
import Quizzucal from "../components/quizzical/Quizzucal";
/**functional component end################## */
/**class component  start #######################*/
//import HelloWorld from '../components/class-component/hello-world/HelloWorld'
//import Greetings from "../components/class-component/Greetings.js/Greetings";
//import StateMngt from "../components/class-component/StateDemo.js/StateMngt";
import CounterMain from "../components/class-component/counter/CounterMain";
import Form from "../components/class-component/Form/Form";
import Admin from "../components/layouts/Admin";
import Default from "../components/layouts/Default";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import  ReduxThunk  from "../components/redux-thunk/ReduxThunk";
// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <div>Hello world hi!</div>,
//     },
//     {
//         path: "/airbnb",
//         element: <AirBnb/>,
//       },
//       {
//         path: "/travelJournal",
//         element: <TravelJournal/>,
//       },
//       {
//         path: "/MemGenerator",
//         element: <MemGenerator/>,
//       },
//       {
//         path: "/counter",
//         element: <Home/>,
//       },
//       {
//         path: "/box",
//         element: <Main/>,
//       },
//       {
//         path: "/jokes",
//         element: <JokeMain/>,
//       },
//       {
//         path: "/formBinding",
//         element: <Forms/>,
//       },
//       {
//         path: "/signUp",
//         element: <MainSignUP/>,
//       },
//       {
//         path: "/useEffect",
//         element: <UseEffect/>,
//       },
//       {
//         path: "/windowTracker",
//         element: <WindowTracker/>,
//       },
//       {
//         path: "/markDownEditor",
//         element: <MarkDownNotes/>,
//       },
//       {
//         path: "/Tenzies",
//         element: <TenziesMain/>,
//       },
//       {
//         path: "/Quizz",
//         element: <Quizzucal/>,
//       },
//       {
//         path: "class-counter",
//         element: <CounterMain/>,
//       },
//       {
//         path: "class-form",
//         element: <Form/>,
//       },
//   ]);
const adminRoutes = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Default />}>
      <Route index element={<MainSignUP />}></Route>
      <Route index path="signUp" element={<MainSignUP />}></Route>
      <Route path="admin" element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      }>
      <Route index element={
          <AirBnb />
        }></Route>
        <Route path="airbnb" element={
          <AirBnb />
        }></Route>
        <Route path="travelJournal" element={<TravelJournal />}></Route>
        <Route path="counter" element={<Home />}></Route>
        <Route path="MemGenerator" element={
            <MemGenerator />
        }></Route>
        <Route path="box" element={<Main />}></Route>
        <Route path="jokes" element={<JokeMain />}></Route>
        <Route path="formBinding" element={<Forms />}></Route>
        <Route path="useEffect" element={<UseEffect />}></Route>
        <Route path="windowTracker" element={<WindowTracker />}></Route>
        <Route path="markDownEditor" element={<MarkDownNotes />}></Route>
        <Route path="Tenzies" element={<TenziesMain />}></Route>
        <Route path="Quizz" element={<Quizzucal />}></Route>
        <Route path="class-counter" element={<CounterMain />}></Route>
        <Route path="class-form" element={<Form />}></Route>
        <Route path="redux-thunk" element={<ReduxThunk/>}></Route>
      </Route>
    </Route>

  )
)
export default adminRoutes
