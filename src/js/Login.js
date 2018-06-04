import React, {Component} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

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
    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    handleSubmit(e){
        e.preventDefault();
        axios.get(this.url + this.state.email)
            .then((response) => {
                console.log(response);
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
        const { classes } = this.props;
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
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                    />
                    <br />
                    <FormControl className={classNames(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                        <Input
                            id="adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                        onMouseDown={this.handleMouseDownPassword}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
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

export default withStyles(styles)(Login);