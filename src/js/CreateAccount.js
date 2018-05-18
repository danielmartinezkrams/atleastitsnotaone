import React, {Component} from 'react';
import axios from "axios";

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.url = "https://slkidsbackend.herokuapp.com/berkeleyeats/api/users";
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            alert: false,
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleSubmit(e){
        e.preventDefault();
        axios.post(this.url, {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password})
            .then(response => {
                const info = {
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    password: response.data.password,
                };
                this.props.function(true, info);
            })
            .catch((err)=> {
                console.log(err);
            });
    }

    render() {
        console.log(this.state);
        let alert = null;
        if(this.state.alert){

        }
        return (
            <div className="Login">
                {alert}
                <form className="confirm" onSubmit={this.handleSubmit}>
                    <label className="verification"><h2>Create Account</h2></label>
                    <br />
                    First <input className="name" name="firstName" type="text" autocomplete='given-name' onChange={this.handleChange}/>
                    <br />
                    Last <input className="name" name="lastName" type="text" autocomplete='family-name' onChange={this.handleChange}/>
                    <br />
                    Email <input className="email" name="email" type="email" autocomplete='email' onChange={this.handleChange}/>
                    <br />
                    Create Password <input className="pw" name="password" type="password" onChange={this.handleChange}/>
                    <br />
                    <input className="confirmButton" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

function isEmpty(obj) {
    if (obj === null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof obj !== "object") return true;
    for (const key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}

export default CreateAccount