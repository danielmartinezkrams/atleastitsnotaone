import React, {Component} from 'react';
import PageTwo from "./pageTwo";
import OrderForm from "./OrderForm";
import { Switch, Route } from 'react-router-dom'

class PageOne extends Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        let info = null;
        if(isLoggedIn){
            info = this.props.info;
        }
        return (
            <Switch>
                <Route exact path='/pageOne' component={PageTwo}/>
                <Route path='/pageOne/:name'  render={({ match }) => ( <OrderForm  match={match} isLoggedIn={isLoggedIn} info={info}/> )} />}) />
            </Switch>
        )
    }
}

export default PageOne

