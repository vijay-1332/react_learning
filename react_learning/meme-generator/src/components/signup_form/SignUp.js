import { useState } from "react"

export default function SignUp() {
    const [signUp, setSignUp] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        isSubscribe: false
    })
    function handleChange(event) {
        const { name, value, type, checked } = event.target
       console.log(name)
        setSignUp((prevData) => {
            console.log(prevData[name])
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
    return (
        <div className="flex flex-col space-y-4 items-center justify-center border bg-white rounded-lg w-[450px] h-[400px]">
            <input
                name="email"
                type="text"
                placeholder="email"
                className=" border-2 border-gray-300 rounded-md py-2 indent-2 outline-none"
                onChange={handleChange}
                value={signUp.email}
            />
            <input
                name="password"
                type="text"
                placeholder="password"
                className=" border-2 border-gray-300 rounded-md py-2 indent-2 outline-none"
                onChange={handleChange}
                value={signUp.password}
            />
            <input
                name="confirmPassword"
                type="text"
                placeholder="confirm password"
                className=" border-2 border-gray-300 rounded-md py-2 indent-2 outline-none"
                onChange={handleChange}
                value={signUp.confirmPassword}
            />
            <span>
                <input
                    type="checkbox"
                    id="isSubscribe"
                    name="isSubscribe"
                    className="mr-2"
                    checked={signUp.isSubscribe}
                    onChange={handleChange}></input>
                <label htmlFor="isFriendly" className="text-lg font-normal">I want to join the newsletter</label>
            </span>
            <button className="bg-violet-500 px-4 py-2 rounded-md text-white font-semibold">Sign Up</button>
        </div>
    )
}