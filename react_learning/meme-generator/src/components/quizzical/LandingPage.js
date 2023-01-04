import { useState } from 'react'
import Button from './core/Button'
import DropDownBox from './core/DropDown'
export default function LandingPage(props) {
    const [categories,setCategories]=useState([
        {value:"any",text:"Any Category"},
        {value:"9",text:"General Knowledge"},
        {value:"10",text:"Entertainment: Books"},
        {value:"11",text:"AEntertainment: Film"},
        {value:"12",text:"Entertainment: Music"},
        {value:"13",text:"Entertainment: Musicals &amp; Theatres"},
        {value:"14",text:"Entertainment: Television"},
        {value:"15",text:"Entertainment: Video Games"},
        {value:"16",text:"Entertainment: Board Games"},
        {value:"17",text:"Science &amp; Nature"},
        {value:"18",text:"Science: Computers"},
        {value:"19",text:"Science: Mathematics"},
        {value:"20",text:"Mythology"},
        {value:"21",text:"Sports"}

    ])
    const [dificultyLevel,setDificultyLevel]=useState([
        {value:"any",text:"Any Difficulty"},
        {value:"easy",text:"Easy"},
        {value:"medium",text:"Medium"},
        {value:"hard",text:"Hard"}
    ])
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-serif font-bold text-[#4D5B9E]">Quizzical</h1>
            <p className="font-serif mt-2">Lets test your knowledge here</p>
            <fieldset className="flex flex-col border-2 p-5 space-y-2">
            <legend className="text-xl font-serif font-bold text-[#4D5B9E]">Configure your test</legend>
            <DropDownBox list={categories} selected={props.testCategory} handleSelectionChange={props.handleCategoryChange}/>
            <DropDownBox list={dificultyLevel} selected={props.testDifficulty} handleSelectionChange={props.handleDificultyChange}/>
            </fieldset>
            <Button value="start quiz" handleClick={props.startQuiz} />
            
        </div>
    )
}
