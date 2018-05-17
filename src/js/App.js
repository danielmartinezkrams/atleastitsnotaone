import React, { Component } from 'react';
import logo from '../img/B-Eats.png';
import '../style/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import VertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Main from './Main';


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
                            <MenuItem primaryText="Place Order" containerElement={<Link to="/pageOne" />}/>
                            <MenuItem primaryText="Make Delivery" containerElement={<Link to="/pageTwo" />}/>
                            <MenuItem primaryText="Login" containerElement={<Link to="/login" />}/>
                        </IconMenu>
                    </div>
                 </header>
                 <Main />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;