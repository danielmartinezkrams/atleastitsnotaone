import React, { Component } from 'react';
import classNames from 'classnames';
import axios from "axios";
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
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import menuData from "../database/sarah"

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

const styles = theme => ({
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

class AcceptOrder extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            order: 'asc',
            orderBy: 'calories',
            data: [],
            selected: [],
            page: 0,
            rowsPerPage: 5,
            alert: false,
            lozo: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.getData = this.getData.bind(this);
        this.url = "https://slkidsbackend.herokuapp.com/berkeleyeats/api/";
        this.columnData = [
            { id: 'name', numeric: false, disablePadding: true, label: 'Restaurant' },
            { id: 'order', numeric: false, disablePadding: false, label: 'Order' },
            { id: 'price', numeric: true, disablePadding: false, label: 'Price ($)' },
            { id: 'time', numeric: false, disablePadding: false, label: 'Time' },
            { id: 'note', numeric: false, disablePadding: false, label: 'Note' },
            { id: 'client', numeric: false, disablePadding: false, label: 'Client' },
        ];
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

    handleSelectAllClick = (event, checked) => {
        if (checked) {
            this.setState({ selected: this.state.data.map(n => n._id) });
            return;
        }
        this.setState({ selected: [] });
    };

    sendSms(to, note){
        axios.post(this.url + "send", {"to": to, "note": note})
            /*.then(res => {
                console.log(res)
            })*/
            .catch(function (error) {
                console.log(error);
            })
    };

    handleSubmit(){
        for(let i = 0; i < this.state.selected.length; i++){
            for(let j = 0; j < this.state.data.length; j++){
                if(this.state.data[j]._id === this.state.selected[i]){
                    axios.put(this.url + "orders/" + this.state.selected[i], {"name": this.state.data[j].name, "order": this.state.data[j].order, "cost": this.state.data[j].cost, "time": this.state.data[j].time, "note": this.state.data[j].note, "client": this.state.data[j].client, "fulfilledBy": this.props.info})
                        .then((response) => {
                            this.getData();
                            this.setState({"alert": true, "lozo": response});
                            this.sendSms(this.state.data[j].client.phone, "Your order of " + response.data.order.toString() + " will be picked up by " + response.data.fulfilledBy.firstName + " " + response.data.fulfilledBy.lastName);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }
        }
    }
    handleClick = (event, id) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        this.setState({ selected: newSelected });
    };

    componentDidMount(){
        this.getData();
    }

    getData(){
        axios.get(this.url + "orders")
            .then((response) => {
                let orders = [];
                const today = new Date();
                let month = today.getMonth() + 1;
                if(month < 10) month = "0" + month;
                let day = today.getDate();
                if(day < 10){
                    day = "0" + day
                }
                const date = today.getFullYear() + '-' + (month) + '-' + day;
                for(let i = 15; i < response.data.length; i++){
                    if(!response.data[i].fulfilledBy && response.data[i].time.includes(date)){
                        orders.push(response.data[i])
                    }
                }
                this.setState({
                    "data": orders
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };
     handleClose(){
         this.setState({"alert": false})
     }

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
        const { data, order, orderBy, rowsPerPage, page, selected, alert, lozo } = this.state;
        const { classes } = this.props;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
        let body = (
            <TableBody>
                <TableRow>
                    <TableCell colSpan="6">No Pending Orders</TableCell>
                </TableRow>
            </TableBody>
        );
        if(!isEmpty(data)){
            body = (
                <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                    const isSelected = this.isSelected(n._id);
                    return (
                        <TableRow
                            hover
                            onClick={event => this.handleClick(event, n._id)}
                            role="checkbox"
                            aria-checked={isSelected}
                            tabIndex={-1}
                            key={n._id}
                            selected={isSelected}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox checked={isSelected} />
                            </TableCell>
                            <TableCell component="th" scope="row" padding="none">{n.name}</TableCell>
                            <TableCell>{n.order.toString()}</TableCell>
                            <TableCell numeric>{n.cost.toFixed(2)}</TableCell>
                            <TableCell >{n.time.slice(11)}</TableCell>
                            <TableCell >{n.note}</TableCell>
                            <TableCell >{n.client.firstName + " " + n.client.lastName}</TableCell>
                        </TableRow>
                    );
                })}
                {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                )}
            </TableBody>)
        }

        let modal = null;
        if(alert && !isEmpty(lozo)){
            let restaurant = lozo.data.name;
            let location = null;
            for(let i = 0; i < menuData.length; i++){
                if(menuData[i].name === restaurant){
                    location = menuData[i].location
                }
            }
            let note = null;
            if(lozo.data.note.length > 0){
                note = "Note: " + lozo.data.note
            }
            modal = (
                    <div className="alert">
                        Thanks for accepting {lozo.data.client.firstName}'s order! <br />
                        Go to {lozo.data.name} at {location}<br/>
                        ${lozo.data.cost}<br/>
                        You will make $1.79<br/>
                        Pick-up time: {lozo.data.time.slice(11)}<br/>
                        The Order: {lozo.data.order}<br/>
                        {note}
                        <Button onClick={this.handleClose}>Close</Button>
                    </div>
                )
        }
        return (
            <Paper className={classes.root}>
                <Toolbar className={classNames(classes.root, {
                    [classes.highlight]: selected.length > 0,
                })}>
                    <div className={classes.title}>
                        {selected.length > 0 ? (
                                <Typography color="inherit" variant="subheading" style={{padding: "20px"}}>
                                    {selected.length} selected
                                </Typography>
                            ) : (
                                <Typography variant="title" id="tableTitle">
                                    Orders
                                </Typography>
                            )}
                    </div>
                    <div className={classes.spacer}/>
                    {modal}
                    <div className={classes.actions}>
                        {selected.length > 0 ? (
                                <Tooltip title="Submit">
                                    <Button variant="raised" onClick={this.handleSubmit} color="secondary" disabled={!this.props.isLoggedIn}>
                                        Accept Order
                                    </Button>
                                </Tooltip>
                            ) : (
                                <Tooltip title="Filter list">
                                    <IconButton aria-label="Filter list">
                                        <FilterListIcon />
                                    </IconButton>
                                </Tooltip>
                            )}
                    </div>
                </Toolbar>
                <div className={classes.tableWrapper}>
                    <Table aria-labelledby="tableTitle" className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        indeterminate={selected.length > 0 && selected.length < data.length}
                                        checked={selected.length === data.length}
                                        onChange={this.handleSelectAllClick}
                                    />
                                </TableCell>
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
                        {body}
                    </Table>
                </div>
                <TablePagination
                    component="div"
                    count={data.length}
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
        );
    }
}

export default withStyles(styles)(AcceptOrder);