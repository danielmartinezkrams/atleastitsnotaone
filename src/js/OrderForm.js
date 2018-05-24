import React, { Component } from 'react';
import axios from "axios";

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.url = "https://developers.zomato.com/api/v2.1/search?q=";
        this.state = {
            response: ""
        }
    }
    componentDidMount() {
        axios.get(this.url + this.props.match.params.name, {
            params: {
                apikey: "d0e94af676033025fcc57acb863d9526",
                lat: "37.862679",
                lon: "-122.2694585"
            }})
            .then((response) => {
                console.log(response);
                this.setState({
                    response: response.data.restaurants[0].restaurant
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render(){
        console.log(this.props.match.params.name);
        console.log(this.state.response);
        return(
            <div>
                Restaurant: {this.props.match.params.name}
                <br />
                {this.state.response.location.address}
            </div>
        )
    }
}

/*
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