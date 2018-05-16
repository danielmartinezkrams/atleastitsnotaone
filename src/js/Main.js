import React, { Component } from 'react';
import '../style/App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import pageOne from './pageOne';
import pageTwo from './pageTwo';
import Login from "./Login";

class Main extends Component {
    render(){
        return(
            <Switch>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/pageOne" component={pageOne}/>
                    <Route path="/pageTwo" component={pageTwo}/>
                    <Route path="/login" component={Login}/>
                </div>
            </Switch>
        )
    }
}

export default Main;