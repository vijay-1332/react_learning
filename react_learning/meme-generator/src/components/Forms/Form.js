import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        comment: '',
        isFriendly: true,
        employmentStatus: "full-time",
        favColor:''
    })
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData((prevFOrmData) => {
            return {
                ...prevFOrmData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <div className="flex flex-col px-10 py-10 space-y-4">
            <input
                name="firstName"
                type="text"
                placeholder="First name"
                className=" border-2 rounded-md py-2 indent-2 outline-none"
                onChange={handleChange}
                value={formData.firstName}
            />
            <input
                name="lastName"
                type="text"
                placeholder="Last name"
                className=" border-2 rounded-md py-2 indent-2 outline-none"
                onChange={handleChange}
                value={formData.lastName}
            />
            <input
                name="emailId"
                type="text"
                placeholder="email id"
                className=" border-2 rounded-md py-2 indent-2 outline-none"
                onChange={handleChange}
                value={formData.emailId}
            />
            <textarea
                name="comment"
                placeholder="comment"
                className=" border-2 rounded-md py-2 indent-2 outline-none"
                value={formData.comment}
                onChange={handleChange} />
            <span>
                <input type="checkbox" id="isFriendly" name="isFriendly" className="mr-2" checked={formData.isFriendly} onChange={handleChange}></input>
                <label htmlFor="isFriendly">  Are you user friendly</label>
            </span>
            <fieldset className="border-2 space-x-2">
                <legend className="mb-2">Current employment status</legend>
                <input
                    className="mr-2"
                    type="radio"
                    id="unEmployed"
                    name="employmentStatus"
                    checked={formData.employmentStatus ==="un employee"}
                    value="un employee"
                    onChange={handleChange}
                ></input>
                <label htmlFor="unEmployed">UnEmployed</label><br></br>
                <input
                    className="mr-2"
                    type="radio"
                    id="partTime"
                    name="employmentStatus"
                    value="part-time"
                    checked={formData.employmentStatus ==="part-time"}
                    onChange={handleChange}
                ></input>
                <label htmlFor="unEmployed">part-time</label><br></br>
                <input
                    className="mr-2"
                    type="radio"
                    id="fullTime"
                    name="employmentStatus"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employmentStatus==="full-time"}
                ></input>
                <label htmlFor="unEmployed">Full-time</label>
            </fieldset>
            <select
            id="favColor"
            name="favColor"
            value={formData.favColor}
            onChange={handleChange}
            >
                <option value="">---select---</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
            </select>
        </div>

    )
}