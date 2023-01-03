import TenziesDesc from "./TenziesDesc"
import Die from './Dies'
import { useState, useEffect } from 'react'
import { nanoid } from "nanoid"
import Confettit from "./Confetti"
export default function TenziesMain() {
    const [dies, setDies] = useState(allNewDies())
    const [tenzies, setTenzies] = useState(false)
    const diesElement = dies.map((die) => {
        return (
            <Die die={die} key={die.id} handleClick={() => holdDice(die.id)}></Die>
        )
    })
    useEffect(() => {
        const allHeld = dies.every(die => die.isHeld)
        const refrenceDie = dies[0].value
        const sameValue = dies.every(die => die.value === refrenceDie)
        if (allHeld && sameValue) {
            setTenzies(true)
        }
    }, [dies])
    function holdDice(diceId) {
        setDies(preDice => preDice.map(dice => dice.id === diceId ? { ...dice, isHeld: true } : dice))

    }
    function randomDieValue() {
        return Math.ceil(Math.random() * 6)
    }
    function allNewDies() {
        const newArray = []
        for (let i = 0; i < 10; i++) {
            const newDie = {
                value: randomDieValue(),
                isHeld: false,
                id: nanoid()
            }
            newArray.push(newDie)
        }
        return newArray
    }
    function rollUnheldDies() {
        if (tenzies) {
            setDies(allNewDies())
            setTenzies(false)
        } else {
            setDies(oldDice => oldDice.map((dice) => {
                return !dice.isHeld ? { ...dice, value: randomDieValue(), isHeld: false, id: nanoid() } : dice
            }))
        }

    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex items-center justify-center bg-gray-700 h-[380px] w-[360px] rounded-lg">
                <div className="flex flex-col p-4  items-center  bg-gray-100 h-[320px] w-[320px] rounded-lg space-y-4">
                    <TenziesDesc />
                    <div className="flex flex-wrap gap-4 justify-center">
                        {diesElement}
                        {tenzies && <Confettit />}
                        <button className="h-[36px] w-[92px] bg-blue-700 text-white rounded-md " onClick={rollUnheldDies}>{tenzies ? "New Game" : "Roll"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}