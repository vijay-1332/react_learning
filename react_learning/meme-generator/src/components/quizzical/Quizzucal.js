import { useState } from "react"
import { nanoid } from "nanoid"
import LandingPage from './LandingPage'
import Button from "./core/Button"
import Question from "./Question"
import Option from "./core/Option"
export default function Quizzucal() {
    const [questions, setQuestions] = useState(() => JSON.parse(localStorage.getItem('queSet')) || [])
    const [isAnsLocked, setIsAnsLocked] = useState(false)
    const [scoreObtain, setScoreObtain] = useState(0)
    async function getAllQuestions() {
        const res = await fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
        const data = await res.json()
        console.log(data.results)
        const ques = data.results.map((res) => {
            const options = (shuffle([...res.incorrect_answers, res.correct_answer])).map((opt) => {
                return {
                    optId: nanoid(),
                    val: opt
                }
            })
            console.log(options)
            return {
                'qId': nanoid(),
                'que': res.question,
                'opts': options,
                'correct_ans': res.correct_answer,
                'answered': '',
                'isCorrect': false

            }
        })
        setQuestions(ques)
        localStorage.setItem("queSet", JSON.stringify(ques))
    }
    const questionsElement = questions.map((question) => {
        return (
            <div className="">
                <Question key={question.qId} question={question.que} />
                <div className="flex overflow-x-auto scroll-p-2 mt-2">
                    {question.opts && question.opts.map((opt) => {
                        return (
                            <Option key={opt.optId} isAnsLocked={isAnsLocked} ans={question.answered} option={opt.val} handleClick={() => saveAnswer(question.qId, opt)} />
                        )
                    })}
                </div>
                <hr className="my-4" />
            </div>

        )
    })
    // function updateQuestionObj(oldQue, objOpt) {
    //     let isMatched = false
    //     for (let i = 0; i < oldQue.opts.length; i++) {
    //         console.log(oldQue.opts[i].optId + '---' + objOpt.optId)
    //         if (oldQue.opts[i].optId === objOpt.optId) {
    //             isMatched = true
    //         }
    //     }
    //     return isMatched
    // }
    function saveAnswer(questionId, objOpt) {
        console.log(questionId)
        console.log(objOpt)
        // setQuestions(oldQues=>oldQues.map(oldQue=>oldQue.qId === questionId?oldQue.opts.map(opt=>opt.optId===objOpt.optId?{...opt,val:objOpt.val}:objOpt):oldQue))
        setQuestions((oldQues) => {
            return oldQues.map((oldQue) => {
                if (oldQue.qId === questionId) {
                    return { ...oldQue, answered: objOpt.val }
                } else {
                    return oldQue
                }
            })
        })
    }
    function lockResult() {
        setQuestions((oldQues) => {
            return oldQues.map((oldQue) => {
                console.log(oldQue.answered + '--' + oldQue.correct_ans)
                if (oldQue.answered === oldQue.correct_ans) {
                    setScoreObtain(preScore => preScore + 1)
                    return { ...oldQue, isCorrect: true }
                } else {
                    return oldQue
                }
            })
        })
        setIsAnsLocked(true)
        console.log(scoreObtain)
    }
    function resetTest() {
        setIsAnsLocked(false)
        setScoreObtain(0)
        getAllQuestions()
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    return (
        <div className="flex 
        items-center 
        justify-center 
        h-screen
        ">
            <div
                className="relative 
                        w-1/3
                        bg-[#F5F7FB]
                        p-8
                        ">

                {questions.length > 0 ? <div>
                    {questionsElement}
                    <div className="flex items-center justify-center">
                        {isAnsLocked ? <div className="flex items-center justify-center">
                            <p className="mr-4 font-serif font-bold text-[#293264]">{`You scored ${scoreObtain}/${questions.length}`}</p>
                            <Button value="play again" handleClick={resetTest} />
                        </div> : <Button value="lock test" handleClick={lockResult} />
                        }
                    </div>
                </div> : <LandingPage startQuiz={resetTest}/>}

            </div>
        </div>
    )
}