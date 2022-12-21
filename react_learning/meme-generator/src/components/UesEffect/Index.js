import { useState, useEffect } from "react"

export default function UseEffect() {
    const [counter, setCounter] = useState(1)
    const [skywalkers, setSkywalkers] = useState({})
    console.log('component render')
    useEffect(() => {
        console.log('use effect run')
        fetch(`https://swapi.dev/api/people/${counter}`).then(res => res.json()).then((data) => {
            setSkywalkers(data)
        })
    },[counter])

    return (
        <div className="p-4 space-y-3">
            <p>count: {counter}</p>
            <button className="bg-blue-400 p-2 rounded-lg" onClick={() => setCounter(prevCount => prevCount + 1)}>Get next record</button>
            <div>
            <pre>{JSON.stringify(skywalkers, null, 5)}</pre>
            </div>
        </div>
    )
}