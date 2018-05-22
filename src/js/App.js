import React, { Component } from 'react';
import logo from '../img/B-Eats.png';
import '../style/App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Main from './Main';

const theme = createMuiTheme({
    /* theme for v1.x */
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
        <MuiThemeProvider theme={theme}>
             <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">B-Eats</h1>
                    <div>
                        <div>
                            <IconButton aria-label="More" aria-haspopup="true" aria-owns={anchorEl ? 'long-menu' : null} onClick={this.handleClick} style={{color: "white"}} >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu  id="long-menu"
                                   anchorEl={anchorEl}
                                   open={Boolean(anchorEl)}
                                   onClose={this.handleClose}
                                   PaperProps={{
                                       style: {
                                           width: 200,
                                       },
                                   }}>
                                <MenuItem><Link to="/login">Login</Link></MenuItem>
                                <MenuItem><Link to="/">Home</Link></MenuItem>
                                <MenuItem><Link to="/pageOne">Place Order</Link></MenuItem>
                                <MenuItem><Link to="/pageTwo">Make Delivery</Link></MenuItem>
                            </Menu>
                        </div>
                    </div>

                 </header>
                 <Main />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;