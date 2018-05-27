import React, { Component } from 'react';
import '../style/App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PageOne from './pageOne';
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import AcceptOrder from "./AcceptOrder"
import Paper from '@material-ui/core/Paper';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handler = this.handler.bind(this)
    }

    handler(x, y) {
        this.setState({
            isLoggedIn: x,
            info: y
        })
    }

    render(){
        return(
            <Paper className="content" elevation={2} color="primary">
            <Switch>
                <div className="content">
                    <Route exact path="/" render={() => <Home isLoggedIn={this.state.isLoggedIn} info={this.state.info}/>}/>
                    <Route path="/pageOne" render={() => <PageOne isLoggedIn={this.state.isLoggedIn} info={this.state.info}/>}/>
                    <Route path="/login" render={() => <Login isLoggedIn={this.state.isLoggedIn} function={this.handler} info={this.state.info}/>}/>
                    <Route path="/createAccount" render={() => <CreateAccount isLoggedIn={this.state.isLoggedIn} function={this.handler} info={this.state.info}/>}/>
                    <Route path="/makedelivery" render={() => <AcceptOrder isLoggedIn={this.state.isLoggedIn} function={this.handler} info={this.state.info}/>}/>
                </div>
            </Switch>
            </Paper>
        )
    }
}

//render={() => <pageTwo isLoggedIn={this.state.isLoggedIn} info={this.state.info}/>}

export default Main;