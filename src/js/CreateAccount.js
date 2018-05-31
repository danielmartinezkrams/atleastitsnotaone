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
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleSubmit(e){
        e.preventDefault();
        axios.post(this.url, {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, phone: this.state.phone, password: this.state.password})
            .then(response => {
                const info = {
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    phone: response.data.phone,
                    password: response.data.password,
                };
                this.props.function(true, info);
            })
            .catch((err)=> {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="Login">
                <form className="confirm" onSubmit={this.handleSubmit}>
                    <label className="verification"><h2>Create Account</h2></label>
                    <br />
                    First <input className="name" name="firstName" type="text" autoComplete='given-name' onChange={this.handleChange} required/>
                    <br />
                    Last <input className="name" name="lastName" type="text" autoComplete='family-name' onChange={this.handleChange} required/>
                    <br />
                    Email <input className="email" name="email" type="email" autoComplete='email' onChange={this.handleChange} required/>
                    <br />
                    Phone <input className="phone" name="phone" type="phone" autoComplete='phone' onChange={this.handleChange} required/>
                    <br />
                    Create Password <input className="pw" name="password" type="password" onChange={this.handleChange} required/>
                    <br />
                    <input className="confirmButton" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default CreateAccount