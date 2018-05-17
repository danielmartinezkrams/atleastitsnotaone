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
        axios.post(this.url, {refer: this.state.refer, review: this.state.review, toast: this.state.roast, from: this.props.info.studentID, name: this.props.info.from})
            .then(res => {
                this.getData();
                this.setState({roast: "", review: 0})
            })
            .catch((err)=> {
                console.log(err);
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
                    <input className="name" name="firstName" type="text" onChange={this.handleChange}/>
                    <br />
                    <input className="name" name="lastName" type="text" onChange={this.handleChange}/>
                    <br />
                    <input className="email" name="email" type="email" onChange={this.handleChange}/>
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