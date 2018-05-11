import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }
    handleClick = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
    return (
        <MuiThemeProvider>
             <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to At Least It's not a One</h1>
                 </header>
                <p className="App-intro">
                </p>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
