import React, {Component} from 'react';
import axios from "axios";
import {Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this);
        this.url = "https://slkidsbackend.herokuapp.com/berkeleyeats/api/users/";
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
        axios.get(this.url + this.state.email)
            .then((response) => {
                if(response.data === null || response.data.password !== this.state.password){
                    this.setState({
                        alert: true
                    });
                }
                else{
                    const info = {
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                    };
                    this.setState({
                        isLoggedIn: true,
                        alert: true,
                        info: info
                    });
                    this.props.function(true, info);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    closeAlert() {
        this.setState({ alert: false });
    }
    logout(){
        this.setState({
            isLoggedIn: false,
            info: ""
        });
        this.props.function(false, "");
    }

    render() {
        let alert = null;
        if(this.state.alert){
            if (!this.state.isLoggedIn) {
                alert = <div className="alert">Login Unsuccessful<Button color="primary" onClick={() => this.closeAlert()}>Try Again</Button></div>;
            } else {
                alert = <div className="alert">{this.state.info.firstName} {this.state.info.lastName} Login Successful <Link onClick={() => this.closeAlert()} to={"/"}>Continue</Link></div>
            }
        }
        else if(this.state.isLoggedIn){

            return (
                <div className="Login">
                    <h3>
                        {this.props.info.firstName} {this.props.info.lastName}<br/>
                    </h3>
                    <Button color="primary" onClick={this.logout}>
                        Log Out
                    </Button>
                </div>
            )
        }
        return (
            <div className="Login">
                {alert}
                <form className="confirm" onSubmit={this.handleSubmit}>
                    <label className="verification"><h2>Login</h2></label>
                    <br />
                    Email <input className="email" name="email" type="text" onChange={this.handleChange}/>
                    <br />
                    Password <input className="pw" name="password" type="password" onChange={this.handleChange}/>
                    <br />
                    <Button className="confirmButton" type="submit" color="secondary">
                       Submit
                    </Button>
                </form>
                <Button  type="submit" color="primary">
                    <Link to="createAccount">Create Account</Link>
                </Button>

            </div>
        );
    }
}

export default Login