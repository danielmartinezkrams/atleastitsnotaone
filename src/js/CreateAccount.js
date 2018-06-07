import React, {Component} from 'react';
import axios from "axios";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MaskedInput from "react-text-mask";
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
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

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.url = "https://slkidsbackend.herokuapp.com/berkeleyeats/api/users";
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            showPassword: false,
            open: false
        }
    }

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleClickOpen = () => {

    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit(e){
        e.preventDefault();
        axios.get(this.url + "/" + this.state.email)
            .then(response => {
                if(this.state.verify === this.state.password && isEmpty(response.data)){
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
                            this.setState({ open: true , content: "Congratulations " + response.data.firstName + " " + response.data.lastName, to: "/"});
                        })
                        .catch((err)=> {
                            console.log(err);
                        });
                }
                else{
                    this.setState({ open: true , content: "Create Account Fail. Try again.", to: "/createaccount"});
                }
            })
            .catch((err)=> {
                console.log(err);
            });
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="Login">
                <Link to='/login'>Back</Link>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.state.content}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            <Link to={this.state.to}>
                                Continue
                            </Link>
                        </Button>
                    </DialogActions>
                </Dialog>
                <form className="confirm" onSubmit={this.handleSubmit}>
                    <label className="verification"><h2>Create Account</h2></label>
                    <br/>
                    <TextField
                        name="firstName"
                        label="First Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange}
                        autoComplete='given-name'
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        name="lastName"
                        label="Last Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange}
                        autoComplete='family-name'
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        onChange={this.handleChange}
                    />
                    <br />
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="formatted-text-mask-input" />
                        <Input
                            value={this.state.phone}
                            name="phone"
                            onChange={this.handleChange}
                            id="phone"
                            inputComponent={TextMaskCustom}
                        />
                    </FormControl>
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
                    <br/>
                    <FormControl className={classNames(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="adornment-verify-password">Verify Password</InputLabel>
                        <Input
                            id="adornment-verify-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.verify}
                            name="verify"
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
                    <br/>
                    <Button type="submit" className={classes.button}>Submit</Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(CreateAccount);