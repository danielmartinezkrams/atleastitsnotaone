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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    root: {
            width: '100%',
            marginTop: theme.spacing.unit * 3,
        },
        table: {
            minWidth: 1020,
        },
        tableWrapper: {
            overflowX: 'auto',
        },
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getOrders = this.getOrders.bind(this);
        this.logout = this.logout.bind(this);
        this.url = "https://slkidsbackend.herokuapp.com/berkeleyeats/api/";
        this.columnData = [
            { id: 'name', numeric: false, disablePadding: true, label: 'Restaurant' },
            { id: 'order', numeric: false, disablePadding: false, label: 'Order' },
            { id: 'price', numeric: true, disablePadding: false, label: 'Price ($)' },
            { id: 'time', numeric: false, disablePadding: false, label: 'Time' },
            { id: 'note', numeric: false, disablePadding: false, label: 'Note' },
            { id: 'client', numeric: false, disablePadding: false, label: 'Client' },
        ];
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            alert: false,
            orders: [],
            fulfill: [],
            order: 'asc',
            orderBy: 'calories',
            data: [],
            selected: [],
            page: 0,
            rowsPerPage: 5,
        }
    }

    createSortHandler = property => event => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === orderBy && this.state.order === 'desc') {
            order = 'asc';
        }
        const data = order === 'desc'
            ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
            : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));
        this.setState({ data, order, orderBy });
    };

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
        axios.get(this.url + "users/" + this.state.email)
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

    getOrders(){
        let orders = [];
        let fulfill = [];
        axios.get(this.url + "orders")
            .then((response) => {
                console.log(response);
                console.log(this.props);
                for(let i = 13; i < response.data.length; i++){
                    if(response.data[i].client.email === this.props.info.email){
                        orders.push(response.data[i])
                    }
                    if(response.data[i].fulfilledBy.email === this.props.info.email){
                        fulfill.push(response.data[i])
                    }
                }
                console.log(orders);
                console.log(fulfill);
                this.setState({"orders": orders, "fulfill": fulfill})
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

    componentDidMount(){
        if(this.props.isLoggedIn){
            this.getOrders();
        }
    }

    render() {
        const { classes } = this.props;
        const { order, orderBy, rowsPerPage, page, orders,fulfill } = this.state;
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
                    <Paper className={classes.root}>
                        <Toolbar className={classNames(classes.root)}>
                            <div className={classes.title}>
                                <Typography variant="title" id="tableTitle">
                                    Orders
                                </Typography>
                            </div>
                            <div className={classes.spacer}/>
                        </Toolbar>
                        <div className={classes.tableWrapper}>
                            <Table aria-labelledby="tableTitle" className={classes.table}>
                                <TableHead >
                                    <TableRow>
                                        {this.columnData.map(column => {
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    numeric={column.numeric}
                                                    padding={column.disablePadding ? 'none' : 'default'}
                                                    sortDirection={orderBy === column.id ? order : false}
                                                >
                                                    <Tooltip
                                                        title="Sort"
                                                        placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                                        enterDelay={300}
                                                    >
                                                        <TableSortLabel
                                                            active={orderBy === column.id}
                                                            direction={order}
                                                            onClick={this.createSortHandler(column.id)}
                                                        >
                                                            {column.label}
                                                        </TableSortLabel>
                                                    </Tooltip>
                                                </TableCell>
                                            );
                                        }, this)}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={n._id}
                                            >
                                                <TableCell component="th" scope="row" padding="none">{n.name}</TableCell>
                                                <TableCell>{n.order.toString()}</TableCell>
                                                <TableCell numeric>{n.cost.toFixed(2)}</TableCell>
                                                <TableCell >{n.time.slice(11)}</TableCell>
                                                <TableCell >{n.note}</TableCell>
                                                <TableCell >{n.client.firstName + " " + n.client.lastName}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                        <TablePagination
                            component="div"
                            count={orders.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                'aria-label': 'Previous Page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'Next Page',
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                    </Paper>
                    <Button color="primary" onClick={this.logout}>
                        Log Out
                    </Button>
                </div>
            )
        }
        return (
            <div className="Login">
                {alert}
                {this.state.orders}
                {this.state.fulfill}
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