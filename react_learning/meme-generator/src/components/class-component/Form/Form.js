import { Component } from "react"

export default class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailId: '',
        comment: '',
        isFriendly: true,
        employmentStatus: "full-time",
        favColor:''
    }
    handleChange=(event)=> {
        const { name, value, type, checked } = event.target
        type === "checkbox"?
        this.setState({
            [name]:checked
        }):
        this.setState({
            [name]:value
        })
        
    }
    componentDidMount(){
      const {firstName,lastName,emailId,comment,isFriendly,employmentStatus,favColor} = {...JSON.parse(localStorage.getItem('state'))}
      this.setState(()=>{
        return{
            firstName:firstName,
            lastName:lastName,
            emailId:emailId,
            comment:comment,
            isFriendly:isFriendly,
            employmentStatus:employmentStatus,
            favColor:favColor
        }
      })
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    localStorage.setItem('state',JSON.stringify(this.state))
    }
render(){
    return (
        <div className="flex flex-col px-10 py-10 space-y-4">
            <input
                name="firstName"
                type="text"
                placeholder="First name"
                className=" border-2 rounded-md py-2 indent-2 outline-none"
                onChange={this.handleChange}
                value={this.state.firstName}
            />
            <input
                name="lastName"
                type="text"
                placeholder="Last name"
                className=" border-2 rounded-md py-2 indent-2 outline-none"
                onChange={this.handleChange}
                value={this.state.lastName}
            />
            <input
                name="emailId"
                type="text"
                placeholder="email id"
                className=" border-2 rounded-md py-2 indent-2 outline-none"
                onChange={this.handleChange}
                value={this.state.emailId}
            />
            <textarea
                name="comment"
                placeholder="comment"
                className=" border-2 rounded-md py-2 indent-2 outline-none"
                value={this.state.comment}
                onChange={this.handleChange} />
            <span>
                <input type="checkbox" id="isFriendly" name="isFriendly" className="mr-2" checked={this.state.isFriendly} onChange={this.handleChange}></input>
                <label htmlFor="isFriendly">  Are you user friendly</label>
            </span>
            <fieldset className="border-2 space-x-2">
                <legend className="mb-2">Current employment status</legend>
                <input
                    className="mr-2"
                    type="radio"
                    id="unEmployed"
                    name="employmentStatus"
                    checked={this.state.employmentStatus ==="un employee"}
                    value="un employee"
                    onChange={this.handleChange}
                ></input>
                <label htmlFor="unEmployed">UnEmployed</label><br></br>
                <input
                    className="mr-2"
                    type="radio"
                    id="partTime"
                    name="employmentStatus"
                    value="part-time"
                    checked={this.state.employmentStatus ==="part-time"}
                    onChange={this.handleChange}
                ></input>
                <label htmlFor="unEmployed">part-time</label><br></br>
                <input
                    className="mr-2"
                    type="radio"
                    id="fullTime"
                    name="employmentStatus"
                    value="full-time"
                    onChange={this.handleChange}
                    checked={this.state.employmentStatus==="full-time"}
                ></input>
                <label htmlFor="unEmployed">Full-time</label>
            </fieldset>
            <select
            id="favColor"
            name="favColor"
            value={this.state.favColor}
            onChange={this.handleChange}
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
   
}