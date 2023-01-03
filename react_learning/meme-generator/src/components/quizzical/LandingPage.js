import Button from './core/Button'
export default function LandingPage(props){
    return(
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-serif font-bold text-[#4D5B9E]">Quizzical</h1>
            <p className="font-serif mt-2">Lets test your knowledge here</p>
           <Button value="start quiz" handleClick={props.startQuiz}/>
        </div>
    )
}