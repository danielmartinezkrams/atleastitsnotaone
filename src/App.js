import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Switch, Route, Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import VertIcon from 'material-ui/svg-icons/navigation/more-vert';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
             <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">B-Eats</h1>
                    <div>
                        <IconMenu iconStyle={{color: "white"}} iconButtonElement={<IconButton><VertIcon/></IconButton>} anchorOrigin={{horizontal: 'left', vertical: 'top'}} targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                            <MenuItem primaryText="Home" containerElement={<Link to="/" />}/>
                            <MenuItem primaryText="Page One" containerElement={<Link to="/pageOne" />}/>
                            <MenuItem primaryText="Page Two" containerElement={<Link to="/pageTwo" />}/>
                        </IconMenu>
                    </div>
                 </header>
                 <Main />
            </div>
        </MuiThemeProvider>
    );
  }
}

class Main extends Component {
    render(){
        return(
            <Switch>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/pageOne" component={pageOne}/>
                    <Route path="/pageTwo" component={pageTwo}/>
                </div>
            </Switch>
        )
    }
}

class Home extends Component {
    render(){
        return(
            <h1>
                Home
            </h1>
        )
    }
}

class pageOne extends Component {
    render(){
        return(
            <h1>
                Page One
            </h1>
        )
    }
}

class pageTwo extends Component {
    render(){
        return(
            <h1>
                Page Two
            </h1>
        )
    }
}

export default App;