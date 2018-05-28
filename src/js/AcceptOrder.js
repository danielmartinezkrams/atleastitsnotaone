import React, { Component } from 'react';
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

class AcceptOrder extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            order: 'asc',
            orderBy: 'calories',
            data: [],
            selected: [],
            page: 0,
            rowsPerPage: 5.
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.url = "https://slkidsbackend.herokuapp.com/berkeleyeats/api/orders";
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

    handleSubmit(){
        for(let i = 0; i < this.state.selected.length; i++){
            axios.put(this.url + "/" + this.state.selected[i], {"fulfilledBy": this.props.info})
                .then((response) => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
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
        axios.get(this.url)
            .then((response) => {
                console.log(response);
                let orders = [];
                const today = new Date();
                let month = today.getMonth() + 1;
                if(month < 10) month = "0" + month;
                const date = today.getFullYear() + '-' + (month) + '-' + today.getDate();
                for(let i = 0; i < response.data.length; i++){
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

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
        const { data, order, orderBy, rowsPerPage, page, selected } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
        let body = null;
        if(isEmpty(data)){
            body =(
                <TableBody>
                    <TableRow>
                        <TableCell colSpan="6">No Pending Orders</TableCell>
                    </TableRow>
                </TableBody>
            )
        }
        else{
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
                            <TableCell numeric>{n.cost}</TableCell>
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
        return (
            <Paper>

                <Toolbar>
                    <div>
                        {selected.length > 0 ? (
                                <Typography color="inherit" variant="subheading">
                                    {selected.length} selected
                                </Typography>
                            ) : (
                                <Typography variant="title" id="tableTitle">
                                    Orders
                                </Typography>
                            )}
                    </div>
                    <div/>
                    <div>
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
                <div>
                    <Table aria-labelledby="tableTitle">
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
        width: '300px',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

export default withStyles(styles)(AcceptOrder);