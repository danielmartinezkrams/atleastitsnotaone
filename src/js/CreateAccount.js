import React, {Component} from 'react';
import axios from "axios";
import {Link } from 'react-router-dom';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this);
        this.url = "https://slkidsbackend.herokuapp.com/berkeleyeats/api/users";
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            alert: false,
            selected: [],
            noData: false
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleSubmit(e){
        e.preventDefault();
        axios.get(this.url + this.state.id)
            .then((response) => {
                if(response.data === null){
                    this.setState({
                        alert: true
                    });
                }
                else{
                    const info = {
                        class: response.data.class,
                        first: response.data.first,
                        last: response.data.last,
                        studentID: response.data.studentID,
                        _id: response.data._id,
                        from: response.data.first + " " + response.data.last + " " + response.data.class
                    };
                    this.setState({
                        isLoggedIn: true,
                        alert: true,
                        info: info
                    });
                    this.props.function(this.state.isLoggedIn, info);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount(){
        if(this.state.isLoggedIn) {
            this.getData()
        }
    }

    closeAlert() {
        this.setState({ alert: false });
    }


    render() {
        return (
            <div className="Login">
                {alert}
                <form className="confirm" onSubmit={this.handleSubmit}>
                    <label className="verification"><h2>Create Account</h2></label>
                    <br />
                    <input className="userName" name="userName" type="text" onChange={this.handleChange}/>
                    <br />
                    <input className="pw" name="passWord" type="text" onChange={this.handleChange}/>
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