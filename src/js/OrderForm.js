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
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import menuData from '../database/sarah'

const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};

const today = new Date();
let month = today.getMonth() + 1;
if(month < 10) month = "0" + month;
const date = today.getFullYear() + '-' + (month) + '-' + today.getDate();

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            response: "",
            order: 'asc',
            orderBy: 'id',
            menu: "",
            selected: [],
            data: menuData,
            time: date + "T12:15",
            page: 0,
            toggle: false,
            rowsPerPage: 10.
        };
        this.url = "https://slkidsbackend.herokuapp.com/berkeleyeats/api/orders";
        this.columnData = [
            { id: 'name', numeric: false, disablePadding: true, label: 'Item' },
            { id: 'price', numeric: true, disablePadding: false, label: 'Price ($)' }
        ];
    }
    componentDidMount() {
        for(let i = 0; i < this.state.data.length; i++){
            if(this.state.data[i].name === this.props.match.params.name){
                this.setState({menu: this.state.data[i].menu, rowCount: this.state.data[i].menu.length})
            }
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        const data = order === 'desc'
            ? this.state.menu.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
            : this.state.menu.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        this.setState({ data, order, orderBy });
    };

    toggle(event) {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }

    handleSubmit(food, cost, e){
        axios.post(this.url, {"name": this.props.match.params.name, "order": food, "cost": cost, "time": this.state.time, "note": this.state.note, "client": this.props.info, "fulfilledBy": false})
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleSelectAllClick = (event, checked) => {
        if (checked) {
            this.setState({ selected: this.state.menu.map(n => n.id) });
        }
        else{
            this.setState({ selected: [] });
        }

    };

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

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render(){
        const { menu, order, orderBy, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, menu.length - page * rowsPerPage);
        let body = null;
        if(this.state.menu !== ""){
            body = (<TableBody>
                {menu.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                    const isSelected = this.isSelected(n.id);
                    return (
                        <TableRow
                            hover
                            onClick={event => this.handleClick(event, n.id)}
                            role="checkbox"
                            aria-checked={isSelected}
                            tabIndex={-1}
                            key={n.id}
                            selected={isSelected}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox checked={isSelected} />
                            </TableCell>
                            <TableCell component="th" scope="row" padding="none">
                                {n.item}
                            </TableCell>
                            <TableCell numeric>{n.price}</TableCell>
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
        let food = [];
        let cost = 0;
        let modal = null;
        if(this.state.toggle){
            for(let i = 0; i < this.state.selected.length; i++){
                food.push(this.state.menu[i].item);
                cost += menu[i].price
            }
            modal = (
                <div className="modal" style={this.state.toggle ? display : hide}>
                    <form>
                        <h3>Review Your Order:</h3><br />
                        Items: {food.toString()}<br/>
                        Cost: ${cost.toFixed(2)}<br />
                        <TextField id="datetime-local" name="time" onChange={this.handleChange} label="Pickup Time" type="datetime-local" defaultValue={date + "T12:15"} required InputLabelProps={{shrink: true,}}/><br />
                        <label>Note: </label><input type="text" name="note" onChange={this.handleChange}/>
                        <Button variant="raised" color="secondary" cost={cost} food={food} onClick={this.handleSubmit.bind(this, food, cost)} disabled={!this.props.isLoggedIn}>
                            Confirm
                        </Button>
                    </form>
                </div>
            );
        }

        return(
            <div>
                <h2> Restaurant: {this.props.match.params.name} </h2>
                <Button variant="raised" color="secondary" onClick={this.toggle} disabled={!this.props.isLoggedIn}>
                    Place Order
                </Button>
                {modal}
                <br />
                <Paper>
                    <Toolbar>
                        <div>
                            {this.state.selected.length > 0 ? (
                                    <Typography color="inherit" variant="subheading">
                                        {this.state.selected.length} selected
                                    </Typography>
                                ) : (
                                    <Typography variant="title" id="tableTitle">
                                        Menu
                                    </Typography>
                                )}
                        </div>
                        <div/>
                        <div>
                            {this.state.selected.length > 0 ? (
                                    <Tooltip title="Delete">
                                        <IconButton aria-label="Delete">
                                            <DeleteIcon />
                                        </IconButton>
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
                            <TableHead >
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            indeterminate={this.state.selected.length > 0 && this.state.selected.length < this.rowCount}
                                            checked={this.state.selected.length === this.state.rowCount}
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
                                                        onClick={this.handleRequestSort}
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
                        count={menu.length}
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
            </div>
        )
    }
}

/*
 axios.get(this.url + this.props.match.params.name, {
 params: {
 apikey: "d0e94af676033025fcc57acb863d9526",
 lat: "37.862679",
 lon: "-122.2705152"
 }})
 .then((response) => {
 console.log(response);
 if(response.data.results_found > 0){
 this.setState({
 response: response.data.restaurants[0].restaurant
 })
 }
 })
 .catch(function (error) {
 console.log(error);
 })
 <br />
 <input type="text" name="Choose Resturaunt" />
 <br />
 Meal:
 <input type="text" name="Choose Meal" />
 Drink:
 <br />
 <input type="text" name="Choose Drink" />
 Options:<br />
 <input type="text" name="Additional items. Please specify"/>
 <button type="button">Submit Order</button>
 */

export default OrderForm;